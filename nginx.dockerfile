FROM nginx:latest

COPY ./php-task /var/www/html/
COPY ./etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
