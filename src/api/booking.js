/**
 * Controller for booking
 * 
 */

const express = require('express');
const router = express.Router();
const { getSeats,
    getRooms,
    bookSeat,
    getAllBookings,
    getBookingHistory,
    cancelBooking,
    getBookingsByRoomId
} = require('../services/bookingService.js');

// 获取所有房间
router.get('/rooms', async (req, res) => {
    try {
        const rooms = await getRooms();
        res.send(rooms);
    } catch (error) {
        console.log(error);
    }
});

// 获取房间的所有座位
router.get('/rooms/:roomId/seats', async (req, res) => {
    try {
        const roomId = req.params.roomId;
        const seats = await getSeats(roomId);
        res.send(seats);
    } catch (error) {
        console.log(error);
    }
});

// 获取所有预约
router.get('/', async (req, res) => {
    try {
        const bookings = await getAllBookings();
        res.send(bookings);
    } catch (error) {
        console.log(error);
    }
});

// 获取用户个人预约历史
router.get('/bookingHistory', async (req, res) => {
    try {
        const userId = req.user.userId;
        const bookings = await getBookingHistory(userId);
        res.send(bookings)
    } catch (error) {
        console.log(error);
    }
});

// 预定座位
router.post('/bookseat', async (req, res) => {
    console.log(req.body);
    console.log(req.user);
    try {
        const userId = req.user.userId;
        const dateBooked = req.body.date_booked;
        const hoursBooked = req.body.hours_booked;
        const seatId = req.body.seat_id;
        const booking = await bookSeat(dateBooked, hoursBooked, seatId, userId);
        res.send(booking);
    } catch (error) {
        console.log(error);
    }
});

// 获取某一天一个房间的的预约记录 Get all bookings of seats in a room on a specific day
router.post('/rooms/:roomId/bookings', async (req, res) => {
    try {
        const roomId = req.params.roomId;
        const date = req.body.date;
        const bookings = await getBookingsByRoomId(roomId, date);
        res.send(bookings);
    } catch (error) {
        console.log(error);
    }
});

// 取消预约
router.post('/cancelBooking', async (req, res) => {
    try {
        const bookingId = req.body.booking_id;
        const booking = await cancelBooking(bookingId);
        res.status(200).send(booking);
    } catch (error) {
        console.log(error);
        res.status(400).send({ error: error.message });
    }
});


module.exports = router;