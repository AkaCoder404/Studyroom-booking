-- Create database
CREATE DATABASE IF NOT EXISTS study_room_booking;

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
    capacity INT NOT NULL,
    is_overnight BOOLEAN NOT NULL DEFAULT FALSE,
    max_hours_allowed INT NOT NULL DEFAULT 4,
    opening_time INT NOT NULL DEFAULT 7,
    closing_time INT NOT NULL DEFAULT 22
);

-- Seats Table
CREATE TABLE seats (
    seat_id INT AUTO_INCREMENT PRIMARY KEY,
    room_id INT NOT NULL,
    seat_has_outlet BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

-- Bookings Table
CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    seat_id INT NOT NULL,
    user_id INT NOT NULL,
    time_of_booking TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    date_booked DATE NOT NULL,
    hours_booked BIT(24) NOT NULL DEFAULT b'0',
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
('Room 1', 5),
('Room 2', 6),
('Room 3', 7),
('Room 4', 8),
('Room 5', 9);

-- Add some default values into seats
INSERT INTO seats (room_id, seat_has_outlet) VALUES
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


-- Add some default values into bookings
INSERT INTO bookings (seat_id, user_id, date_booked, hours_booked, status) VALUES
(1, 2, '2024-04-03', b'000000000111100000000000', 'booked'),
(6, 2, '2024-04-03', b'000001111000000000000000', 'booked'),
(1, 2, '2024-04-03', b'000001111000000000000000', 'cancelled');
