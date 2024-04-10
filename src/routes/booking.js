/**
 * Controller for booking
 * 
 */

const express = require('express');
const router = express.Router();
const {
    getRooms,
    getSeats,
    getAllBookings,
    getBookingHistory,
    bookSeat,
    cancelBooking,
    getBookingsByRoomId
} = require('../controllers/bookings.controller.js');

router.get('/rooms', getRooms); // 获取所有房间
router.get('/rooms/:roomId/seats', getSeats); // 获取房间的所有座位
router.get('/', getAllBookings); // 获取所有预约
router.get('/bookingHistory', getBookingHistory); // 获取用户个人预约历史
router.post('/bookseat', bookSeat); // 预定座位
router.post('/rooms/:roomId/bookings', getBookingsByRoomId); // 获取某一天一个房间的的预约记录
router.post('/cancelBooking', cancelBooking); // 取消预约

module.exports = router;