package servers

import (
	pb_svc "github.com/aglide100/dak-blog/pb/svc"
)

type AccountServer struct {
	pb_svc.AccountServer
}

func NewAccountServiceServer() *AccountServer {
	return &AccountServer{}
}

