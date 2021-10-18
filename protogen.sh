#!/bin/bash

protoc \
 --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
 --js_out="import_style=commonjs,binary:./ui/gen" \
 --ts_out="service=grpc-web:./ui/gen" \
 pb/svc/*.proto

 protoc \
 --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
 --js_out="import_style=commonjs,binary:./ui/gen" \
 --ts_out="service=grpc-web:./ui/gen" \
 pb/unit/**/*.proto

protoc -I=. --go_out=plugins=grpc:./ pb/svc/*.proto

protoc -I=. --go_out=../../../ pb/unit/**/*.proto