package db

// import (
// 	"database/sql"
// )

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
	
	