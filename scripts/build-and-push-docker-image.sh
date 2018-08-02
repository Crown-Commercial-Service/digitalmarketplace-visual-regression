#!/bin/bash

VERSION=2.0.0

docker build -t digitalmarketplace/backstopjs:${VERSION} .
docker push digitalmarketplace/backstopjs:${VERSION}
