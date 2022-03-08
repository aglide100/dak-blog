package crawler

import (
	"log"
	// "encoding/json"
	// "net/http"
	// "errors"
	"github.com/PuerkitoBio/goquery"
	"github.com/tidwall/gjson"
)

type Graph struct {
	nodes []Node
}

type Node struct {
	file File
	childs []File
}

type File struct {
	name string 
	path string 
	sha string 
	size int 
	url string 
}

func ScrapApi(url string) ([]*Graph, error) {
	log.Printf("Start scrap url: %s ...", url)
	var parseDatas []*Graph
	// dumpData := &File{}

	doc, err := goquery.NewDocument(url)
	if err != nil {
		return nil, err
	}
	
	
	jsonData := gjson.Get(`{ "datas": ` + doc.Text() + "}", "datas")
	// log.Printf("jsonData: %s ", jsonData.String())

	// initFile := &File{}
	jsonData.ForEach(func(key, value gjson.Result) bool {

		log.Printf("key: %s", )
		log.Printf(value.String())
		return true
	})

	// name := gjson.Get(jsonData.String(), "name")
	// path := gjson.Get(jsonData.String(), "path")
	// sha := gjson.Get(jsonData.String(), "sha")
	// size := gjson.Get(jsonData.String(), "size")
	// url := gjson.Get(jsonData.String(), "url")


	// log.Printf("name: ",len(name))
	// log.Printf("path: ",len(path))
	// log.Printf("sha: ",len(sha))
	// log.Printf("size: ",len(size))
	// log.Printf("url: ",len(url))

	return parseDatas, nil
}

const gitUrl = "https://api.github.com/repos/aglide100/Today-I-Learned/contents/"

func FetchFromGit() (string, error) {
	log.Printf("start fetch from git....")
	
	// res, err := http.Get(gitUrl)
	// if err != nil {
	// 	return "", err
	// }

	// defer res.Body.Close()
	// if res.StatusCode != 200 {
	// 	return "", errors.New("status code error!")
	// }

	// arr := JsonType{}

	// var f =  File{}

	// var arr []string

	result, err := ScrapApi(gitUrl)
	if err != nil {
		return "", err
	}

	log.Printf("result : ", result)

	// jsonData := gjson.Get(doc.Text(), "")


	
	// log.Printf("json data: ", jsonData.String())

	



	// f.Each(func(idx int, selection *goquery.Selection) {
	// 	log.Printf("index: ", idx)
	// })

	// if !gjson.Valid(doc.Text()) {
	// 	return "", errors.New("It's valid json!")
	// }

	// body := gjson.Get(doc.Text(), "body")
	
	// content, ok := gjson.Parse(doc.Text()).Value().(map[string]interface{})
	// if !ok {
	// 	return "", errors.New("It's valid json!")	
	// }
	// log.Println(content)

	// name := gjson.Get(doc, "name")
	// path := gjson.Get(doc, "path")

	// log.Printf("name : %v", name)
	// log.Printf("path : %v", path)

	return "", nil
}