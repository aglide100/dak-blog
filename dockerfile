FROM golang:1.14 AS builder

COPY . "/go/src/github.com/aglide100/dak-blog"
# COPY ./pkg "/go/src/github.com/aglide100/dak-blog"
WORKDIR "/go/src/github.com/aglide100/dak-blog/"

RUN mkdir -p /opt/bin/webd/
RUN mkdir -p /var/lib/webd/

# COPY go.mod .
# COPY go.sum .

RUN go mod vendor \
    && go get -u -d -v ./...
# RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -ldflags '-s' /opt/bin/webd/webd ./cmd/webd

RUN go build -mod=mod -o /opt/bin/webd/webd ./cmd/webd

# RUN cp -r ui /var/lib/webd/
RUN cp -r pkg /var/lib/webddo

FROM debian:stretch-slim AS runtime
COPY --from=builder /opt/bin/webd/webd /opt/bin/webd/webd
COPY --from=builder /var/lib/webd /var/lib/webd

# RUN apt update && apt install -y ca-certificates
# RUN chmod 644 /usr/local/share/ca-certificates && update-ca-certificates

WORKDIR /var/lib/webd
CMD [ "/opt/bin/webd/webd" ]
