# Dockerfile to build MySQL database container

# Use official MySQL image as base image
FROM mysql:latest

LABEL maintainer="AkaCoder404"

ARG MYSQL_ROOT_PASSWORD
ARG MYSQL_DATABASE
ARG MYSQL_ROOT_USER
ARG MYSQL_DOCKER_HOST

# Set environment variables located in .env file
ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_ROOT_USER=${MYSQL_ROOT_USER}
ENV MYSQL_ROOT_HOST=${MYSQL_DOCKER_HOST}

# Copy the database schema to the container
COPY ./database/schema.sql /docker-entrypoint-initdb.d/

# Expose port 3306
EXPOSE 3306

# Start MySQL server
CMD ["mysqld"]

# Build the MySQL database container

