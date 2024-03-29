# Study Room Book Backend
This is a very simple backend project using baremetal node.js and express to build an API for a study room seat booking service. It uses MySQL to connect to the database.

## Features
Core Features
- Authentication with JWT token
- Authourization with Access Tokens and Middleware
- Interacts with MySQL Database

### App Features
- Students can login and log out
- Students can see availble seats
- Students can book an available seats
- Administrator can approve or reject the booking service

## Setup
Use `nvm use` to set the node version.

## Running
First have to create the MySQL database. The schema is defined in `/database/schema.sql`. Define the MySQL host, password and database set in `.env` file.

```sh
DB_HOST = "<HOST>"
DB_USERNAME = "<USERNAME>"
DB_PASSWORD = "<PASSWORD>"
DB_DATABASE = "study_room_booking"

JWT_SECRET = "<TOKEN">
```

You can use `openssl` to create a JWT token, for example run `openssl rand -base64 32` to generate a JWT token.

Then run the application using `npm run dev`.


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