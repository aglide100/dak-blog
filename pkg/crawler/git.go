package crawler

import (
	"errors"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/aglide100/dak-blog/pkg/models"
	"github.com/tidwall/gjson"
)

const gitUrl = "https://api.github.com/repos/aglide100/Today-I-Learned/contents"

func SearchNode(url string) ([]*models.Node, error) {
	log.Printf("Start parse url: %s", url)
	res, err := http.Get(url)
	if err != nil {
		return nil, err
	}

	defer res.Body.Close()
	if res.StatusCode != 200 {
		return nil, errors.New("status code error!")
	}

	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}

	jsonData := gjson.Get(`{ "datas": ` + string(data) + "}", "datas")

	var parseNodes []*models.Node
	var insideError error

	insideError = nil
	newNode := &models.Node{}
	jsonData.ForEach(func(key, value gjson.Result) bool {
		if ( gjson.Get(value.String(), "type").String() == "dir") {
			child, err := SearchNode(url + "/" + gjson.Get(value.String(), "name").String())
			if err != nil {
				insideError = err
				return false
			}
			
			initFile := models.File{
				Name: gjson.Get(value.String(), "name").String(),
				Path: gjson.Get(value.String(), "path").String(),
				// size: gjson.Get(value.String(), "size").Int(),
				Url: gjson.Get(value.String(), "url").String(),
				Content: "",
				Dir: true,
			}

			newNode = &models.Node{
				File: initFile,
				Childs: child,
			}

		} else {
			res, err := http.Get(gjson.Get(value.String(), "download_url").String())
			if err != nil {
				return false
			}
			
			defer res.Body.Close()
			if res.StatusCode != 200 {
				log.Printf("Check status code")
				return false
			}
		
			data, err := ioutil.ReadAll(res.Body)
			if err != nil {
				log.Printf("Can't read data %s", res.Body)
				return false
			}


			initFile := models.File{
				Name: gjson.Get(value.String(), "name").String(),
				Path: gjson.Get(value.String(), "path").String(),
				Url: gjson.Get(value.String(), "url").String(),
				Dir: false,
				Content: string(data),
			}

			newNode = &models.Node{
				File: initFile,
				Childs: nil,
			}
		}

		parseNodes = append(parseNodes, newNode)
		return true
	})

	if insideError != nil {
		return nil, insideError
	}

	return parseNodes, nil
}

func ScrapApi(url string) (*models.Graph, error) {
	log.Printf("Start scrap url: %s ...", url)

	parseNodes, err := SearchNode(url)
	if err != nil {
		return nil, err
	}
	graph := &models.Graph{
		Nodes: parseNodes,
	}

	return graph, nil
}

func FetchFromGit() (*models.Graph, error) {
	log.Printf("start fetch from git....")

	result, err := ScrapApi(gitUrl)
	if err != nil {
		return nil, err
	}

	PrintGraph(result, 0)

	return result, nil
}

func PrintGraph(graph *models.Graph, deps int) {
	for idx:=0; idx<len(graph.Nodes); idx++ {
		if graph.Nodes[idx].File.Dir {
			childGraph := &models.Graph{
				Nodes: graph.Nodes[idx].Childs,
			}

			PrintGraph(childGraph, deps+1)
		}
		
		str := "|"

		for i:=0; i<deps; i++ {
			str += " "
		}
		
		if idx == (len(graph.Nodes)-1) {
			log.Printf(str + "└──" + graph.Nodes[idx].File.Name)
		} else {
			log.Printf(str + "├──" + graph.Nodes[idx].File.Name)
		}
	}
}