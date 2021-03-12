package db

import "github.com/aglide100/chicken_review_webserver/pkg/models"

type DB interface {
	ConnectDB(host, port, user, password, dbname string) (*Database, error)
	SearchReviews(operator string, subject string, name string) ([]*models.Review, error)
	CreateReview(newReview *models.Review) (*models.Review, error)
	UpdateReview(Review *models.Review, ID int) (*models.Review, error)
	DeleteReview(id int)
	GetReview(id int) (*models.Review, bool, error)
	ListReviews(orderType string, pageNumber int) ([]*models.Review, error)
	GetLastInsertReviewID() (int64, error)
	RegisterNewUser(NewUser *models.User) error
	RegisterNewProviderUser(NewUser *models.ProviderUser) error
	GetUser() error
	CheckProviderUser(CheckUser *models.ProviderUser) (error, bool)
}
