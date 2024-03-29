/**
 * 
 * 
 * 
 * 
 */


const express = require('express');
const router = express.Router();
const { getSeats, getRooms } = require('../services/bookingService.js');

// Get all the available rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await getRooms();
        res.send(rooms);
    } catch (error) {
        console.log(error);
    }
});

// Get all available seats for a room
router.get('/:id', async (req, res) => {
    try {
        const seats = await getSeats(req.params.id);
        res.send(seats);
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;