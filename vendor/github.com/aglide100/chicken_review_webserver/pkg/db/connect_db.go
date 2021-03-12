package db

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/aglide100/chicken_review_webserver/pkg/models"

	"github.com/lib/pq"
	_ "github.com/lib/pq"
)

type Database struct {
	conn *sql.DB
}

func ConnectDB(host string, port int, user, password, dbname string) (*Database, error) {
	psqInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqInfo)
	if err != nil {
		return nil, fmt.Errorf("connecting to db: %v", err)
	}
	return &Database{conn: db}, nil
}

func GetReviewFromQuerryList(rows *sql.Rows) ([]*models.Review, error) {
	var allReviews []*models.Review

	var (
		ID                int64
		Title             string
		Date              string
		Author            string
		DefaultPictureURL string
		Comment           string
	)

	for rows.Next() {
		err := rows.Scan(&ID, &Title, &Date, &Author, &DefaultPictureURL, &Comment)
		if err != nil {
			return nil, fmt.Errorf("rows err : %v", err)
		}

		Review := &models.Review{
			ID:                ID,
			Title:             Title,
			Date:              Date,
			Author:            Author,
			DefaultPictureURL: DefaultPictureURL,
			Comment:           Comment,
		}

		allReviews = append(allReviews, Review)
	}
	err := rows.Err()
	if err != nil {
		log.Printf("nothing!")
	}

	return allReviews, nil

}

func (db *Database) SearchReviews(name string, subject string, operator string) ([]*models.Review, error) {

	const q = `
SELECT 
	ID,
	Title,
	Date,
	DefaultPictureURL,
	Author
FROM 
	review
WHERE
	$1 IN (
		$2
	) 
ORDER BY ID ASC
	`

	var allReviews []*models.Review
	allReviews = nil

	switch subject {
	case "Title", "Date", "Author":
		// ok
	default:
		log.Printf("It is not subject type!")
		return allReviews, fmt.Errorf("Invalid!")
	}

	var logic string
	switch operator {
	case "AND":
		logic = "%'"
	case "OR":
		logic = "_'"
	default:
		return allReviews, fmt.Errorf("Wrong operator!")
	}

	queryoperator := "'" + name + "'"

	log.Printf("subject:%v, queryoperator:%v, name:%v, logic:%v", subject, queryoperator, name, logic)

	rows, err := db.conn.Query(q, subject, queryoperator)
	if err != nil {
		return allReviews, fmt.Errorf("There are no reviews : %v", err)
	}
	allReviews, err = GetReviewFromQuerryList(rows)
	if err != nil {
		return allReviews, fmt.Errorf("rows Error! %v", err)
	}
	return allReviews, nil
}

func (db *Database) GetLastInsertReviewID() (int64, error) {
	const q = `
SELECT
	ID
FROM 
	review
WHERE
	ID = (SELECT MAX (ID) FROM review)
`

	var id int

	err := db.conn.QueryRow(q).Scan(
		&id)
	if err == sql.ErrNoRows {
		log.Printf("There are no rows", err)
		return 1, nil
	}
	if err != nil {
		return 1, fmt.Errorf("Scanning :%v", err)
	}
	//log.Printf("id :%v", id)
	ID64 := int64(id + 1)

	return ID64, nil
}

func (db *Database) CreateReview(newReview *models.Review) (*models.Review, error) {

	q := `
INSERT INTO review (
	Title,
	Author,
	DefaultPictureURL,
	StoreName,
	Date,
	PhoneNumber,
	Comment,
	Score,
	Addr,
	Lat,
	Lng,
	PictureURLS
) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`

	res, err := db.conn.Exec(q,
		newReview.Title,
		newReview.Author,
		newReview.DefaultPictureURL,
		newReview.StoreName,
		newReview.Date,
		newReview.PhoneNumber,
		newReview.Comment,
		newReview.Score,
		newReview.Addr,
		newReview.Lat,
		newReview.Lng,
		pq.Array(newReview.PictureURLs))
	if err != nil {
		return nil, fmt.Errorf("inserting: %v", err)
	}
	id, err := res.LastInsertId()
	if err != nil {
		return nil, fmt.Errorf("reading ID: %v", err)
	}
	newReview.ID = id
	return newReview, nil
}

func (db *Database) UpdateReview(updateReview *models.Review, id int) (*models.Review, error) {
	const q = `
UPDATE review
SET 
	Title = $2,
	Author = $3,
	DefaultPictureURL = $4,
	StoreName = $5,
	Date = $6,
	PhoneNumber = $7,
	Comment = $8,
	Score = $9 
WHERE ID = $1
`

	_, err := db.conn.Exec(q, id, updateReview.Title, updateReview.Author, updateReview.DefaultPictureURL, updateReview.StoreName, updateReview.Date, updateReview.PhoneNumber, updateReview.Comment, updateReview.Score)
	if err != nil {
		return updateReview, fmt.Errorf("updating: %v", err)
	}

	return updateReview, nil
}

func (db *Database) DeleteReview(id int) error {
	const q = `
DELETE 
FROM review	
WHERE
	ID=$1
	`

	_, err := db.conn.Exec(q, id)
	if err != nil {
		return fmt.Errorf("deleting: %v", err)
	}

	return nil

}

func (db *Database) GetReview(id int) (*models.Review, bool, error) {
	const q = `
SELECT
	ID,
	Title,
	Author,
	DefaultPictureURL, 
	PictureURLS,
	StoreName, 
	Date, 
	PhoneNumber, 
	Comment, 
	Score,
	Addr,
	Lat,
	Lng
FROM review
WHERE
	ID=$1
	`
	var addr sql.NullString
	var lat sql.NullString
	var lng sql.NullString
	review := new(models.Review)

	err := db.conn.QueryRow(q, id).Scan(
		&review.ID,
		&review.Title,
		&review.Author,
		&review.DefaultPictureURL,
		pq.Array(&review.PictureURLs),
		&review.StoreName,
		&review.Date,
		&review.PhoneNumber,
		&review.Comment,
		&review.Score,
		&addr,
		&lat,
		&lng,
	)
	if err == sql.ErrNoRows {
		return nil, false, nil
	}
	if err != nil {
		return nil, false, fmt.Errorf("querying: %v", err)
	}
	review.Addr = addr.String
	review.Lat = lat.String
	review.Lng = lng.String
	log.Printf("세이브 체크2, ", review.Lat, review.Lng)

	return review, true, nil
}

func (db *Database) ListReviews(orderType string, pagenumber int) ([]*models.Review, error) {

	const q = `
SELECT 
	ID,
	Title, 
	Date, 
	Author,
	DefaultPictureURL,
	Comment
FROM 
	review
ORDER BY ID ASC
	`
	var allReviews []*models.Review
	allReviews = nil
	rows, err := db.conn.Query(q)

	if err != nil {
		return allReviews, fmt.Errorf("There are no reviews : %v", err)
	}

	allReviews, err = GetReviewFromQuerryList(rows)
	if err != nil {
		return allReviews, fmt.Errorf("rows Error! %v", err)
	}
	return allReviews, nil
}

func (db *Database) RegisterNewUser(NewUser *models.User) error {
	const q = `
	
	`

	return nil
}

func (db *Database) RegisterNewProviderUser(NewUser *models.ProviderUser) error {
	const q = `
INSERT INTO providerUser (

) VALUES ()`

	return nil
}

func (db *Database) GetUser() error {
	return nil
}

func (db *Database) CheckProviderUser(CheckUser *models.ProviderUser) (error, bool) {
	const q = `

`
	return nil, false
}
