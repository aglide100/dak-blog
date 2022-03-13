package db

import (
	"github.com/aglide100/dak-blog/pkg/models"
)

func (db *Database) WriteGitFileFromArray(files []*models.Node) error {
	for i:=0; i < len(files); i++ {
		var err error
		if files[i].Childs != nil {
			err = db.WriteGitFileFromArray(files[i].Childs)
		} else {
			err = db.WriteGitFile(&files[i].File)
		}

		if err != nil {
			return err
		}
	}
	return nil
}

func (db *Database) WriteGitFile(file *models.File) error {
	const q = `
	INSERT INTO "GithubFile" (
	"Name",
	"Path",
	"Url",
	"Dir",
	"Content") 
	VALUES ($1, $2, $3, $4, $5)
	`
	_, err := db.Conn.Exec(q, 
	file.Name,
	file.Path,
	file.Url,
	file.Dir,
	file.Content)
	if err != nil {
		return err
	}

	// log.Printf("WriteGitFile res: %s", res)

	return nil
}

func (db *Database) GetAllGitFile() ([]*models.File, error) {
	const q = `
	SELECT * FROM GithubFile
	`
	var (
		Name string
		Path string
		Url     string
		Dir     bool
		Content string
	)

	var files []*models.File
	
	rows, err := db.Conn.Query(q)
	if err != nil {
		return files, err
	}

	for rows.Next() {
		err := rows.Scan(&Name, &Path, &Url, &Dir, &Content)
		if err != nil {
			return nil, err
		}

		githubFile := &models.File{
			Name:Name,
			Path:Path,
			Url:Url,
			Dir:Dir,
			Content:Content,
		}

		files = append(files, githubFile)
	}

	return files, nil
}

func (db *Database) GetGitFile(url string) *models.File {
	const q = `
	
	`
	
	return nil
}

// func (db *Database) WritePost() error {
// 	// 	const q = `
// 	// SELECT
// 	// 	ID,
// 	// 	Title,
// 	// 	Author,
// 	// 	WrittenDate,
// 	// 	Content,
// 	// 	PictureURLs,
// 	// 	Thumbnail
// 	// FROM
// 	// 	post
// 	// ORDER BY ID ASC
// 	// 	`

// 		return nil, nil
// 	}

// func (db *Database) SearchPosts(keyword string) ([]*pb_unit_post.Post, error) {
// 	const q = `

// 	`

// 	var allPosts []*pb_unit_post.Post

// 	rows, err := db.Conn.Query(q, keyword)
// 	if err != nil {
// 		return allPosts, fmt.Errorf("There are no posts : %v", err)
// 	}

// 	var (
// 		ID          string
// 		Title       string
// 		Author      string
// 		WrittenDate string
// 		Content 	string
// 		Thumbnail 	string
// 		PictureURLs []string
// 	)

// 	for rows.Next() {
// 		err := rows.Scan(&ID, &Title, &Author, &WrittenDate, &Content, &Thumbnail, &PictureURLs)
// 		if err != nil {
// 			return nil, fmt.Errorf("rows err : %v", err)
// 		}

// 		id := &pb_unit_post.ID{Uuid: ID}
// 		spec := &pb_unit_post.Spec{
// 			Title: Title,
// 			Author: Author,
// 			WrittenDate: WrittenDate,
// 			Content: Content,
// 			Thumbnail: Thumbnail,
// 			PictureURLs: PictureURLs,
// 		}

// 		Post := &pb_unit_post.Post{Id: id, Spec: spec}

// 		allPosts = append(allPosts, Post)
// 	}
// 	err = rows.Err()
// 	if err != nil {
// 		log.Printf("No list!")
// 	}

// 	return allPosts, nil
// }
	
	