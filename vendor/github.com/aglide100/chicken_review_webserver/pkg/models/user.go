package models

import "time"

type User struct {
	UserID      string
	UserPWD     string
	Name        string
	Addr        string
	Email       string
	PhoneNumber string
	Language    string
	AvatarURL   string
}

type ProviderUser struct {
	RawData           map[string]interface{}
	Provider          string
	Email             string
	Name              string
	FirstName         string
	LastName          string
	NickName          string
	Description       string
	UserID            string
	AvatarURL         string
	Location          string
	AccessToken       string
	AccessTokenSecret string
	RefreshToken      string
	ExpiresAt         time.Time
	IDToken           string
}
