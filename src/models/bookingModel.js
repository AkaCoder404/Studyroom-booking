const db = require('../services/database');

class BookingModel {
    static async findAllRooms() {
        const [rooms] = await db.query('SELECT * FROM rooms');
        return rooms;
    }

    static async findAllSeatsPerRoom(roomId) {
        const [seats] = await db.query('SELECT * FROM seats WHERE room_id = ?', [roomId]);
        return seats;
    }

    static async findSeatById(seatId) {
        const [seat] = await db.query('SELECT * FROM seats WHERE seat_id = ?', [seatId]);
        return seat[0];
    }

    static async
}


module.exports = BookingModel;