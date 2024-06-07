#!/usr/bin/env bash
apk update
apk add nodejs
apk add npm

echo "the PWD is : ${PWD}"
echo "Running composer"
composer install --no-dev --working-dir=/var/www/html
composer dump-autoload

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force

npm install
npm run build

chmod -R 777 ./
chmod -R 777 ./resources/
