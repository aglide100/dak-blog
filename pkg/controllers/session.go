package controllers

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/sessions"
)

type SessionController struct {
	store *sessions.CookieStore
}

func NewSessionController(store *sessions.CookieStore) *SessionController {
	return &SessionController{store: store}
}

func (hdl *SessionController) CreateSession(resp http.ResponseWriter, req *http.Request) error {
	log.Println("receive create new session")

	session, err := hdl.store.Get(req, "user-session")
	if err != nil {
		return fmt.Errorf("Can't save session! %v", err)
	}

	session.Values["UserID"] = ""
	
	session.Save(req, resp)
	if err != nil {
		return fmt.Errorf("Can't save data in session! %v", err)
	}

	return nil
}

func (hdl *SessionController) DeleteSession(resp http.ResponseWriter, req *http.Request) error {
	log.Println("receive delete current session")

	session, err := hdl.store.Get(req, "user-session")
	if err != nil {
		return fmt.Errorf("Can't get current session! %v", err)
	}

	session.Options.MaxAge = -1
	err = session.Save(req, resp)
	if err != nil {
		return fmt.Errorf("failed to delete session", err)
	}
	return nil
}

func (hdl *SessionController) GetCurrentSession(resp http.ResponseWriter, req *http.Request) {
	log.Println("receive get current session")
}
