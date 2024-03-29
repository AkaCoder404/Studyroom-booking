const db = require('../services/database');

class BookingModel {
    static async findAllRooms() {
        const [rooms] = await db.query('SELECT * FROM rooms');
        return rooms;
    }

    static async
}


module.exports = BookingModel;