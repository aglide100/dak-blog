#!/bin/bash

# generate ca.key 
openssl genrsa -out ca.key 4096
# generate certificate
openssl req -new -x509 -key ca.key -sha256 -subj "/C=SE/ST=HL/O=Example, INC." -days 365 -out ca.crt
# generate the server key
openssl genrsa -out server.key 4096
# Generate the csr
openssl req -new -key server.key -out server.csr -config certificate.conf
# 
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256 -extfile certificate.conf -extensions req_ext


openssl genrsa -out client.key 4096
openssl rsa -in client.key -out client.key
openssl req -new -key client.key -subj "/CN=fenix" \
    -out client.csr
openssl x509 -req -in client.csr -CA ca.crt \
    -CAkey ca.key -CAcreateserial -days 365 \
    -text -out client.crt