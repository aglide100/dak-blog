package crawler

import (
	"errors"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/aglide100/dak-blog/pkg/models"
	"github.com/tidwall/gjson"
)

type GitCrawler struct {
	AccessToken
	ScrapUrl
}

type AccessToken struct {
	Token string
}

type ScrapUrl struct {
	Url string
}

func NewGitCrawler(token string, url string) *GitCrawler {
	return &GitCrawler{
		AccessToken{Token: token},
		ScrapUrl{Url: url},
	}
}

func (gitCrawler *GitCrawler) SearchNode(url string, parent string) ([]*models.Node, error) {
	log.Printf("Start parse url: %s / %s", url, parent)
	
	data, err := gitCrawler.CreateHttpReq(url)
	if err != nil {
		return nil, err
	}

	jsonData := gjson.Get(`{ "datas": ` + data + "}", "datas")

	var parseNodes []*models.Node
	var insideError error

	insideError = nil
	newNode := &models.Node{}
	jsonData.ForEach(func(key, value gjson.Result) bool {
		if ( gjson.Get(value.String(), "type").String() == "dir") {
			child, err := gitCrawler.SearchNode(url + "/" + gjson.Get(value.String(), "name").String(), gjson.Get(value.String(), "url").String())
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
				Parent: parent,
				Dir: true,
			}

			newNode = &models.Node{
				File: initFile,
				Childs: child,
			}

		} else {
			data, err := gitCrawler.CreateHttpReq(gjson.Get(value.String(), "download_url").String())
			if err != nil {
				return false
			}
			

			initFile := models.File{
				Name: gjson.Get(value.String(), "name").String(),
				Path: gjson.Get(value.String(), "path").String(),
				Url: gjson.Get(value.String(), "url").String(),
				Dir: false,
				Parent: parent,
				Content: data,
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

func (gitCrawler *GitCrawler) FetchFromGit() (*models.Graph, error) {
	log.Printf("Start scrap url: %s ...", gitCrawler.Url)

	parseNodes, err := gitCrawler.SearchNode(gitCrawler.Url, "")
	if err != nil {
		return nil, err
	}
	graph := &models.Graph{
		Nodes: parseNodes,
	}

	// optional
	PrintGraph(graph, 0)

	return graph, nil
}

func PrintGraph(graph *models.Graph, deps int) {
	for idx:=0; idx<len(graph.Nodes); idx++ {
		if graph.Nodes[idx].File.Dir {
			childGraph := &models.Graph{
				Nodes: graph.Nodes[idx].Childs,
			}

			PrintGraph(childGraph, deps + 1)
		}
		
		str := "|"

		for i := 0; i < deps; i++ {
			str += " "
		}
		
		if idx == (len(graph.Nodes)-1) {
			log.Printf(str + "└──" + graph.Nodes[idx].File.Name)
		} else {
			log.Printf(str + "├──" + graph.Nodes[idx].File.Name)
		}
	}
}

func (gitCrawler *GitCrawler) CreateHttpReq(url string) (string, error) {
	log.Printf("Start parse url: %s", url)
	
	req, err := http.NewRequest("GET", url, nil) 
	if err != nil {
		return "", err
	}

	if len(gitCrawler.Token) > 1 {
		log.Printf("Get gitCrawler.Token!")
		req.Header.Add("Authorization", gitCrawler.Token)
	}

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	if res.StatusCode != 200 {
		return "", errors.New("status code error!")
	}

	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return "", err
	}

	return string(data), nil
}