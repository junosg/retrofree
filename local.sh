cd app

docker build --tag 'retrofree' . --no-cache --force-rm --build-arg ENVIRONMENT="local"
docker run -p 3000:80 'retrofree'