### run

```sh
docker run \
  -it \
  -p 80:80 \
  --rm \
  --name luissaybe \
  -v $(pwd):/usr/share/nginx/html \
  nginx:1.13.6
```