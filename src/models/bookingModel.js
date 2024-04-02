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

    // 获取所有预约
    static async viewAllBookings() {
        const [bookings] = await db.query('SELECT b.*, s.room_id FROM bookings b JOIN seats s ON b.seat_id = s.seat_id');
        return bookings;
    }

    // 获取用户个人预约历史
    static async viewUserBookings(userId) {
        const [bookings] = await db.query('SELECT b.*, s.room_id FROM bookings b JOIN seats s ON b.seat_id = s.seat_id WHERE b.user_id = ?', [userId]);
        return bookings;
    }

    // 获取房间的所有预约
    static async getBookingsByRoomId(roomId, date) {
        const [bookings] = await db.query('SELECT b.*, s.room_id FROM bookings b JOIN seats s ON b.seat_id = s.seat_id WHERE s.room_id = ? AND b.date_booked LIKE ?', [roomId, date]);
        return bookings;
    }

    static async bookSeat(hours_booked, date_booked, seatId, userId) {
        const [booking] = await db.query('INSERT INTO bookings (hours_booked, date_booked, seat_id, user_id, status) VALUES (b?, ?, ?, ?, ?)', [hours_booked, date_booked, seatId, userId, 'booked']);
        return booking;
    }

    // TODO: Handle status in the services
    static async cancelBooking(bookingId) {
        const [booking] = await db.query('UPDATE bookings SET status = "cancelled" WHERE booking_id = ?', [bookingId]);
        return booking;
    }

    static async nowshowBooking(bookingId) {
        const [booking] = await db.query('UPDATE bookings SET status = "nowshow" WHERE booking_id = ?', [bookingId]);
        return booking;
    }

    // TODO 只能管理员批准预订
    static async approveBooking(bookingId) {
        const [booking] = await db.query('UPDATE bookings SET status = approved WHERE booking_id = ?', [bookingId]);

        // Update seat status
        const [seat] = await db.query('UPDATE seats SET status = booked WHERE seat_id = (SELECT seat_id FROM bookings WHERE booking_id = ?)', [bookingId]);
        return booking;
    }


    // TODO Update the seats when booking time ends?





}


module.exports = BookingModel;