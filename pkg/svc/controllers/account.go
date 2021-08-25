package controllers

import (
	pb_svc "github.com/aglide100/dak-blog/pb/svc"
)

type AccountServer struct {
	pb_svc.AccountServer
}

func NewAccountServiceController() *AccountServer {
	return &AccountServer{}
}

