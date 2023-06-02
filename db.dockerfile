FROM mysql

COPY ./db/products.sql /docker-entrypoint-initdb.d/products.sql

ARG MYSQL_ROOT_PASSWORD
ARG MY_SQL_USER
ARG MY_SQL_PASSWORD


ENV SERVER $MYSQL_ROOT_PASSWORD
ENV DATABASE $MY_SQL_USER
ENV USERNAME $MY_SQL_PASSWORD