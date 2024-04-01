/**
 * 
 * 
 * 
 * 
 */


const express = require('express');
const router = express.Router();
const { getSeats, getRooms } = require('../services/bookingService.js');

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



module.exports = router;