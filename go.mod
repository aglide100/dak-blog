module github.com/aglide100/dak-blog

go 1.14

require (
	github.com/go-playground/validator/v10 v10.10.1 // indirect
	github.com/golang/protobuf v1.5.2 // indirect
	github.com/improbable-eng/grpc-web v0.15.0
	github.com/joho/godotenv v1.4.0
	github.com/lib/pq v1.10.5
	github.com/tidwall/gjson v1.14.1
	golang.org/x/sync v0.0.0-20210220032951-036812b2e83c
	google.golang.org/grpc v1.46.0
	google.golang.org/protobuf v1.28.0
)

replace github.com/aglide100/dak-blog => ../dak-blog
