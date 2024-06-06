#!/usr/bin/env bash
composer install
composer dump-autoload

sudo apt-get update
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm --version
nvm install --lts

npm install
npm run build