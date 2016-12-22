#!/bin/bash

NAME="luissaybe"

ids=$(docker ps --filter="name=$NAME" -qa)

if [ "$ids" != "" ]; then
    docker stop "$ids"
    docker rm "$ids"
fi


docker run \
    -d \
    --name="$NAME" \
    -p 82:80 \
    -v /root/luissaybe:/usr/share/nginx/html \
    nginx
