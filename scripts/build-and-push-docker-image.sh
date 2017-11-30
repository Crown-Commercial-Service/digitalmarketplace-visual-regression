#!/bin/bash

VERSION=1.0.0

docker build -t digitalmarketplace/backstopjs:${VERSION} .
docker push digitalmarketplace/backstopjs:${VERSION}
