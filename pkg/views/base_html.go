package views

import (
	"io"
	"io/ioutil"
)

var DefaultBaseHTMLContext = BaseHTMLContext{
	GlobPattern: "ui/*.gohtml",
}

type BaseHTMLContext struct {
	GlobPattern string
}

func (htmlctx *BaseHTMLContext) RenderFile(w io.Writer, path string) error {
	content, err := ioutil.ReadFile(path[9:])
	if err != nil {
		return nil
	}

	w.Write(content)

	return nil
}

func (htmlctx *BaseHTMLContext) RenderImage(w io.Writer, path string) error {

	content, err := ioutil.ReadFile(path[9:])
	if err != nil {
		return nil
	}

	w.Write(content)

	return nil
}

func (htmlctx *BaseHTMLContext) RenderUsing(w io.Writer, contentPattern string) error {

	return nil
}
