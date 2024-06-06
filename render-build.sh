cd app

docker build --tag 'test' . --no-cache
docker run -p 3000:80 'test'