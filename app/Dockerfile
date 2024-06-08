FROM richarvey/nginx-php-fpm:3.1.6 as service

COPY . .

ARG ENVIRONMENT="production"

# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV ${ENVIRONMENT}
ENV APP_KEY=base64:39HmKD2v0Uc5Rd34SxNEVYUOIDhUfzifHseRnSBuzt4=
ENV APP_DEBUG false
ENV APP_NAME=retrofree
ENV VITE_APP_NAME=retrofree
ENV LOG_CHANNEL stderr

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

CMD ["/start.sh"]
