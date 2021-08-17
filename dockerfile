FROM golang:1.14 AS builder

COPY . "/go/src/github.com/aglide100/dak-blog"
# COPY ./pkg "/go/src/github.com/aglide100/dak-blog"
WORKDIR "/go/src/github.com/aglide100/dak-blog/"

RUN mkdir -p /opt/bin/apid/
RUN mkdir -p /var/lib/apid/

# COPY go.mod .
# COPY go.sum .

RUN go mod vendor \
    && go get -u -d -v ./...
# RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -ldflags '-s' /opt/bin/apid/apid ./cmd/apid

RUN go build -mod=mod -o /opt/bin/apid/apid ./cmd/apid

# RUN cp -r ui /var/lib/apid/
RUN cp -r pkg /var/lib/apiddo

FROM debian:stretch-slim AS runtime
COPY --from=builder /opt/bin/apid/apid /opt/bin/apid/apid
COPY --from=builder /var/lib/apid /var/lib/apid

# RUN apt update && apt install -y ca-certificates
# RUN chmod 644 /usr/local/share/ca-certificates && update-ca-certificates

WORKDIR /var/lib/apid
CMD [ "/opt/bin/apid/apid" ]
