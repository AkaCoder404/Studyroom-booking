/**
 * @fileoverview This is a controller file that contains booking controller functions.
 */

const bookings = require('../services/bookings.service');

const getRooms = async (req, res, next) => {
    try {
        const rooms = await bookings.getRooms();
        res.send(rooms);
    } catch (error) {
        console.log(error);
        next(err);
    }
}

const getSeats = async (req, res, next) => {
    try {
        const { roomId } = req.params.roomId;
        const seats = await bookings.getSeats(roomId);
        res.send(seats);
    } catch (error) {
        console.log(error);
        next(err);
    }
}

const getAllBookings = async (req, res) => {
    try {
        const bookings_list = await bookings.getAllBookings();
        res.send(bookings_list);
    } catch (error) {
        console.log(error);
    }
}

const getBookingHistory = async (req, res) => {
    try {
        const userId = req.user.userId;
        const bookings_history = await bookings.getBookingHistory(userId);
        res.send(bookings_history);
    } catch (error) {
        console.log(error);
    }
}

const bookSeat = async (req, res) => {
    try {
        const userId = req.user.userId;
        const dateBooked = req.body.date_booked;
        const hoursBooked = req.body.hours_booked;
        const seatId = req.body.seat_id;
        const booking = await bookings.bookSeat(dateBooked, hoursBooked, seatId, userId);
        res.send(booking);
    } catch (error) {
        console.log(error);
    }
}

const getBookingsByRoomId = async (req, res) => {
    try {
        const roomId = req.params.roomId;
        const date = req.body.date;
        const bookings_info = await bookings.getBookingsByRoomId(roomId, date);
        res.send(bookings_info);
    } catch (error) {
        console.log(error);
    }
}

const cancelBooking = async (req, res) => {
    try {
        const bookingId = req.body.booking_id;
        const booking = await bookings.cancelBooking(bookingId);
        res.send(booking);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getRooms,
    getSeats,
    getAllBookings,
    getBookingHistory,
    getBookingsByRoomId,
    bookSeat,
    cancelBooking,
}