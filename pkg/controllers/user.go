package controllers

import (
	"net/http"

	"github.com/aglide100/personel-blog/pkg/db"
)

type UserController struct {
	db *db.Database
}

func NewUserController(db *db.Database) *UserController {
	return &UserController{db:db}
}

func (hdl *UserController) NewUser(resp http.ResponseWriter, req *http.Request) {

}

func (hdl *UserController) SignInUser(resp http.ResponseWriter, req *http.Request){

}

func (hdl *UserController) UpdateUserInfo(resp http.ResponseWriter, req *http.Request) {
	
}