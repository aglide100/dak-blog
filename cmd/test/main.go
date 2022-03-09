package main

import (
	"log"
	"github.com/aglide100/dak-blog/pkg/crawler"
	// "github.com/aglide100/dak-blog/pkg/models"
)

func main() {

	result, err := crawler.FetchFromGit()
	if err != nil {
		log.Printf("Can't fetch from git! %v", err)
	}

	log.Printf("result %T", result)
}