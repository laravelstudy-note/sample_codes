FROM php:8.2-apache

# extension
RUN apt-get update \
	&& apt-get install -y git zip unzip \
    && docker-php-ext-install pdo_mysql

# composer
RUN curl -S https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    && composer self-update

# VirtualHostの設定をコピーする
COPY ./conf/vhost.conf /etc/apache2/sites-available/000-default.conf

# rewriteを有効にする
WORKDIR /etc/apache2/mods-enabled
RUN ln -s ../mods-available/rewrite.load ./

WORKDIR /app