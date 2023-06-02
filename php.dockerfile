FROM php:8-fpm

ARG SERVER
ARG DATABASE
ARG USERNAME
ARG PASSWORD

ENV SERVER $SERVER
ENV DATABASE $DATABASE
ENV USERNAME $USERNAME
ENV PASSWORD $PASSWORD

COPY ./php-task /var/www/html/
COPY ./etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["bash", "-c", "docker-php-ext-install pdo_mysql && php-fpm"]

EXPOSE 9000:9000
