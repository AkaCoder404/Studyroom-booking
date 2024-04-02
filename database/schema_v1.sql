-- Create database
CREATE DATABASE study_room_booking;

-- Select database
USE study_room_booking;


-- Users Table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(100) NOT NULL
);

-- Rooms Table
CREATE TABLE rooms (
    room_id INT AUTO_INCREMENT PRIMARY KEY,
    room_name VARCHAR(255) UNIQUE NOT NULL,
    capacity INT NOT NULL
);

-- Seats Table
CREATE TABLE seats (
    seat_id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT NOT NULL,
    is_occupied BOOLEAN NOT NULL DEFAULT FALSE,
    seat_has_outlet_id BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

-- Bookings Table
CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    seat_id INT NOT NULL,
    user_id INT NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    status VARCHAR(100) NOT NULL,
    FOREIGN KEY (seat_id) REFERENCES seats(seat_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Add some default values into users
INSERT INTO users (username, password, email, role) VALUES 
('admin', 'password', 'admin@mail.com', 'admin'),
('john doe', 'password', 'john.doe@mail.com', 'student'),
('jane doe', 'password', 'jane.doe@mail.com', 'student');

-- Add some default values into rooms
INSERT INTO rooms (room_name, capacity) VALUES
('Room 1', 10),
('Room 2', 10),
('Room 3', 10),
('Room 4', 10),
('Room 5', 10);

-- Add some default values into seats
INSERT INTO seats (room_id, seat_has_outlet_id) VALUES
(1, TRUE),
(2, TRUE),
(3, TRUE),
(4, TRUE),
(5, TRUE),
(1, FALSE),
(2, FALSE),
(3, FALSE),
(4, FALSE),
(5, FALSE);
