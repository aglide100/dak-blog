> protoc -I=. --go_out=plugins=grpc:./ pb/svc/\*.proto

> protoc -I=. --go_out=pb/unit/post/ pb/unit/post/post.proto

js, ts out

service create!

> protoc --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" --js_out="import_style=commonjs,binary:./ui/gen/" --ts_out="service=grpc-web:./ui/gen/" pb/svc/\*.proto

> protoc -I=. pb/unit/account/account.proto --js_out=import_style=commonjs,binary:ui/gen/ --plugin=protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts --ts_out=service_out:./ui/gen/

> protoc -I=. pb/svc/\*.proto --js_out=import_style=commonjs,binary:ui/gen/ --plugin=protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts --ts_out=service_out:./ui/gen/
