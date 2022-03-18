package main

import (
	"log"
	"os"

	"github.com/aglide100/dak-blog/pkg/crawler"
	"github.com/aglide100/dak-blog/pkg/db"

	"github.com/joho/godotenv"
)

const gitUrl = "https://api.github.com/repos/aglide100/Today-I-Learned/contents"


func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	gitToken := os.Getenv("GITHUBTOKEN")
	log.Printf("gitToken %s", gitToken)

	myCrawler := crawler.NewGitCrawler(gitToken, gitUrl)

	result, err := myCrawler.FetchFromGit()
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