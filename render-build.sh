cd app

docker container prune
docker build --tag 'test' . --no-cache
docker run -p 3000:80 'test'