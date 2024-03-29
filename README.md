# Study Room Book Backend
This is a very simple backend project using baremetal node.js and express to build an API for a study room seat booking service. It uses MySQL to connect to the database. Here we use the 3-layer architecture approach for a scalable project.

## Features
### Core Features
- Authentication with JWT token
- Authourization with Access Tokens
- Access Log and Error Log with Middleware
- Interacts with MySQL Database

### App Features
- Users can login and log out
- Students can see availble rooms/seats for their specific department
- Students can book an available seats
- Administrator can approve or reject a booking made by students

## Setup
Use `nvm use` to set the node version.

## Running
First have to install and create the MySQL database. The schema is defined in `/database/schema.sql`. Define the MySQL host, password and database set in a `.env` file.
```sh
MYSQL_HOST = "<HOST>"
MYSQL_DOCKER_HOST = "%"
MYSQL_ROOT_USER = "<USERNAME>"
MYSQL_ROOT_PASSWORD = "<PASSWORD>"
MYSQL_DATABASE = "study_room_booking"

JWT_SECRET = "<TOKEN">
```

In order to create a container running MySQL, simply run `docker compose -f docker-compose.yml up -d`, use a database GUI like MySQL Workbench to connect to the MySQL database and create the tables there. Issues regarding this can be found here https://github.com/docker-library/mysql/issues/275.

You can use `openssl` to create a JWT token, for example run `openssl rand -base64 32` to generate a JWT token. This is used for authentication with access token.

Then run the application using `npm run dev`. Here we used nodemon for live referesh of app.

## API Documentation

### User
#### Login
```
api/users/login
```
Login with a username and password and get back a token that will be stored in cookies.
#### Create User
```
api/users/createuser
```
Managers can create new users.

### Booking
```
api/
```