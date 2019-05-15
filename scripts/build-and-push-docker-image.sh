#!/bin/bash

set -ex

VERSION="$(npx -c 'echo "$npm_package_version"')"

docker build -t digitalmarketplace/backstopjs:${VERSION} .
docker push digitalmarketplace/backstopjs:${VERSION}
docker push digitalmarketplace/backstopjs:latest
