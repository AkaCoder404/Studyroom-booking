# Study Room Book Backend
This is a very simple backend project using baremetal node.js and express to build an API for a study room seat booking service. It uses MySQL to connect to the database. Here we use the 3-layer architecture approach for a scalable project.

## Features
### Core Features
- Authentication with JWT token & Middleware
- Authorization with custom checks
- Access Log and Error Log with Middleware
- MySQL Database Model Interface
- TODO: Generate QR Codes for Sign In
- TODO: Send email for confirmation

### App Features
#### All Users
- Users can login and log out
- Users can view basic personal information

#### Students
- Students can see availble rooms/seats for their specific department
- Students can book an available seats
- Students can see their booking history / status (booked, cancelled, completed, noshow)
- Students can cancel their booking
- TODO. Students can rebook based on past history
- TODO. Students can check into the room
- TODO. Students get a confirmation email

#### Administrator
- TODO. Administrator can add or remove users
- TODO. Administrator can create or remove rooms/seats
- TODO. Administrator can get some analytics about rooms
- Administrator can approve or reject a booking made by students

#### Others
- TODO: User's get a "noshow" status if not checked in on time.

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

In order to create a container running MySQL, simply run `docker compose -f docker-compose.yml up -d`, use a database GUI like MySQL Workbench to connect to the MySQL database and create the tables there. More details can be found in about MySQL database setup [here](./docs/01_SQL.md)

> Make sure you are using docker compose v2.

You can use `openssl` to create a JWT token, for example run `openssl rand -base64 32` to generate a JWT token. This is used for authentication with access token.

Then run the application using `npm run dev`. Here we used nodemon for live referesh of app.



## API Documentation
Refer to this [document](./docs/02.API.md)

