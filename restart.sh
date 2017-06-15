#!/bin/bash

ids=$(docker ps --filter="name=luissaybe" -qa)

if [ "$ids" != "" ]; then
    docker stop "$ids"
    docker rm "$ids"
fi

docker run \
    -d \
    --name=luissaybe \
    -p 80:80 \
    -v $(pwd):/usr/share/nginx/html \
    nginx:1.13.1
