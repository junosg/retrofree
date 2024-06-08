cd app

docker build --tag 'template' . --no-cache --force-rm
docker run -p 3000:80 'template'