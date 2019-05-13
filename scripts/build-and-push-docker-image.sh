#!/bin/bash

VERSION=2.1.0

docker build -t digitalmarketplace/backstopjs:${VERSION} .
docker push digitalmarketplace/backstopjs:${VERSION}
docker push digitalmarketplace/backstopjs:latest
