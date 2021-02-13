package views

import (
	"io"
)

//NotFoundView struct
type NotFoundView struct {
	htmlctx BaseHTMLContext
}

func (view NotFoundView) ContentType() string {
	return "text/html"
}

func NewNotFoundView(htmlctx BaseHTMLContext) View {
	return &NotFoundView{htmlctx: htmlctx}
}

// sended notFoundHTML
func (view NotFoundView) Render(w io.Writer) error {

	return view.htmlctx.RenderUsing(w, "ui/defaults/404.gohtml")

}
