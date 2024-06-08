# RetroFree: A free retrospective tool

## Local Development

1. Open a terminal and change current directory to app

    ````cmd
    cd app

2. Build the docker image

    ````sh
    docker build --tag 'retrofree' . --no-cache --force-rm

3. Run the docker image

    ````sh
    docker run -p 3000:80 'retrofree'
