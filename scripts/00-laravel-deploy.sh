#!/usr/bin/env bash
echo "Running composer"
echo "Installing nvm"
sudo apt-get update
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm --version
nvm install --lts

echo "Build frontend"
npm install
npm run build

composer global require hirak/prestissimo
composer install --no-dev --working-dir=/var/www/html

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force