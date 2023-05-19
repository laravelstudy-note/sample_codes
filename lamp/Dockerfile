FROM php:8.2-apache

# extension
RUN apt-get update \
    && docker-php-ext-install pdo_mysql

# composer
RUN curl -S https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    && composer self-update