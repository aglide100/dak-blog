#!/bin/bash

if [[ "$GOBIN" == "" ]]; then
  if [[ "$GOPATH" == "" ]]; then
    echo "Required env var GOPATH is not set; aborting with error; see the following documentation which can be invoked via the 'go help gopath' command."
    go help gopath
    exit -1
  fi

  echo "Optional env var GOBIN is not set; using default derived from GOPATH as: \"$GOPATH/bin\""
  export GOBIN="$GOPATH/bin"
fi

PROTOC=`command -v protoc`
if [[ "$PROTOC" == "" ]]; then
  echo "Required "protoc" to be installed. Please visit https://github.com/protocolbuffers/protobuf/releases (3.5.0 suggested)."
  exit -1
fi

echo "Compiling protobuf definitions for svc"
protoc \
 --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
 --js_out="import_style=commonjs,binary:./ui/gen" \
 --ts_out="service=grpc-web:./ui/gen" \
 pb/svc/*.proto


echo "Compiling protobuf definitions for unit"
 protoc \
 --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
 --js_out="import_style=commonjs,binary:./ui/gen" \
 --ts_out="service=grpc-web:./ui/gen" \
 pb/unit/**/*.proto

protoc -I=. --go_out=plugins=grpc:./ pb/svc/*.proto

protoc -I=. --go_out=../../../ pb/unit/**/*.proto