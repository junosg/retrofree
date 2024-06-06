#!/usr/bin/env bash
composer install
composer dump-autoload

npm install
npm run build