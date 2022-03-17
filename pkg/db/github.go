package db

import (
	"github.com/aglide100/dak-blog/pkg/models"
)

func (db *Database) WriteGitFileFromArray(files []*models.Node) error {
	for i:=0; i < len(files); i++ {
		var err error

		if files[i].Childs != nil {
			err = db.WriteGitFileFromArray(files[i].Childs)
		}

		err = db.WriteGitFile(&files[i].File)
		
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
		"Parent",
		"Content")
		VALUES ($1, $2, $3, $4, $5, $6)
		ON CONFLICT ("Url")
	DO UPDATE
		SET ("Name",
			 "Path",
			 "Url",
			 "Dir",
			 "Parent",
			 "Content") =
			(excluded."Name",
			 excluded."Path",
			 excluded."Url",
			 excluded."Dir",
			 excluded."Parent",
			 excluded."Content")
	`

	_, err := db.Conn.Exec(q, 
	file.Name,
	file.Path,
	file.Url,
	file.Dir,
	file.Parent,
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
		Parent string
	)

	var files []*models.File
	
	rows, err := db.Conn.Query(q)
	if err != nil {
		return files, err
	}

	for rows.Next() {
		err := rows.Scan(&Name, &Path, &Url, &Dir, &Parent, &Content)
		if err != nil {
			return nil, err
		}

		githubFile := &models.File{
			Name:Name,
			Path:Path,
			Url:Url,
			Dir:Dir,
			Parent: Parent,
			Content:Content,
		}

		files = append(files, githubFile)
	}

	return files, nil
}

func (db *Database) GetGitFile(url string) (*models.File, error) {
	const q = `
	SELECT * FROM GithubFile
	WHERE url = $1
	`
	file := new(models.File)

	err := db.Conn.QueryRow(q, url).Scan(
		&file.Name,
		&file.Path,
		&file.Content,
		&file.Dir,
		&file.Parent,
		&file.Url,
	)

	if err != nil {
		return nil, err
	}
	
	return file, nil
}

func (db *Database) UpdateGitFile(file *models.File) (error) {
	const q = `
	UPDATE GithubFile
	SET
		Name = $1,
		Path = $2,
		Dir = $3,
		Parent = $4,
		Content = $5,
	WHERE url = $6
	`
	_, err := db.Conn.Exec(q, 
		file.Name,
		file.Path,
		file.Url,
		file.Dir,
		file.Parent,
		file.Content,
		file.Url)

	if err != nil {
		return err
	}
	
	return nil
}

func (db *Database) DeleteGitFile(url string) (error) {
	const q = `
	DELETE 
	FROM GithubFile
	WHERE url = $1
	`
	_, err := db.Conn.Exec(q, url)
	if err != nil {
		return err
	}
	
	return nil
}