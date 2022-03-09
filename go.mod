module github.com/aglide100/dak-blog

go 1.13

require (
	github.com/improbable-eng/grpc-web v0.15.0
	github.com/joho/godotenv v1.4.0
	github.com/lib/pq v1.10.4
	github.com/tidwall/gjson v1.14.0
	golang.org/x/net v0.0.0-20210916014120-12bc252f5db8 // indirect
	golang.org/x/sync v0.0.0-20210220032951-036812b2e83c
	google.golang.org/grpc v1.44.0
	google.golang.org/protobuf v1.27.1
)

replace github.com/aglide100/dak-blog => ../dak-blog
