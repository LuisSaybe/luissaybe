### build image

```sh
npm -g install yarn
yarn
docker build --rm -f docker/Dockerfile -t luissaybe/luissaybe .
```

### watch for changes

```sh
yarn watch
```


### run in local

```sh
docker run -it --name luissaybe -v $(pwd):/root/project --rm -p 80:80 luissaybe/luissaybe
```

### run in prod

```sh
docker run -dit --name luissaybe --rm -p 80:80 -p 443:443 -v /root/certs:/root/certs luissaybe/luissaybe nginx -c /root/project/docker/nginx-https.conf
```

### get SSL certs

[tutorial](https://www.digitalocean.com/community/tutorials/how-to-use-certbot-standalone-mode-to-retrieve-let-s-encrypt-ssl-certificates-on-ubuntu-1804)
