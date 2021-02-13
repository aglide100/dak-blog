package controllers

import (
	"log"
	"net/http"

	"github.com/aglide100/personel-blog/pkg/views"
)

type NotFoundController struct {
}

//ServeHttp HTTP GET index -> REDIRECT to /reviews
func (hdl *NotFoundController) ServeHTTP(resp http.ResponseWriter, req *http.Request) {
	view := views.NewNotFoundView(views.DefaultBaseHTMLContext)
	resp.Header().Set("Content-Type", view.ContentType())
	err := view.Render(resp)
	if err != nil {
		log.Printf("failed to render : %v", err)
	}
}
