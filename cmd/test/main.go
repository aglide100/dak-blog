package main

import (
	"log"

	"github.com/aglide100/dak-blog/pkg/crawler"
	"github.com/aglide100/dak-blog/pkg/db"
)


func main() {

	result, err := crawler.FetchFromGit()
	if err != nil {
		log.Printf("Can't fetch from git! %v", err)
	}
	
	myDB, err := db.ConnectDB("localhost", 5432, "table_admin", "HeLLo!1", "blog")
	if err != nil {
		log.Printf("Can't connect database")
	}

	err = myDB.WriteGitFileFromArray(result.Nodes)

	if err != nil {
		log.Printf("found err! :%v", err)
	}

}