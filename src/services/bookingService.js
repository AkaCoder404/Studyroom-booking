
// Import Models
const BookingModel = require('../models/bookingModel');


// Service to get all rooms
const getRooms = async () => {
    const rooms = await BookingModel.findAllRooms();
    return rooms;
};

// Service to get all seats in a room
const getSeats = async (roomId) => {
    const seats = await BookingModel.findAllSeatsPerRoom(roomId);
    return seats;
};

// Service to view all bookings
const getAllBookings = async () => {
    const bookings = await BookingModel.viewAllBookings();
    return bookings;
};

// Service to make booking
const bookSeat = async (dateBooked, hoursBooked, seatId, userId) => {
    // TODO Do some checks to make sure the booking is valid
    // - Check if overlap with other bookings, check seat status

    // Convert hours booked to 24 bit binary
    const hoursBookedConverted = hoursBooked;
    const booking = await BookingModel.bookSeat(hoursBookedConverted, dateBooked, seatId, userId);
    return booking;
};

// Service to get own booking history
const getBookingHistory = async (userId) => {
    // TODO 只能查看自己的预订
    const booking = await BookingModel.viewUserBookings(userId);
    return booking;
};

// Service to cancel booking
const cancelBooking = async (bookingId) => {
    const booking = await BookingModel.cancelBooking(bookingId);
    return booking;
}

// Service to get bookings by room ID
const getBookingsByRoomId = async (roomId, date) => {
    console.log("Room ID: ", roomId, date);
    // TODO 优化？
    // Get all seats
    const seats = await BookingModel.findAllSeatsPerRoom(roomId);
    console.log("Amount of Seats: ", seats.length);

    // Get all bookings for the room
    const bookings = await BookingModel.getBookingsByRoomId(roomId, date);

    console.log("Amount of Bookings", bookings.length);

    // Combine seats hours booked
    const seatBookings = seats.map(seat => {
        const seatBookings = bookings.filter(booking => booking.seat_id === seat.seat_id && booking.status === 'booked');
        return {
            seat_id: seat.seat_id,
            room_id: seat.room_id,
            seat_has_outlet: seat.seat_has_outlet_id,
            bookings: seatBookings
        }
    });

    // console.log("Seat bookings: ", seatBookings);
    // Go over through each seat and overlap the the hours booked which are binary
    const compressedBookings = seatBookings.map(seat => {
        // Initialize an array with 3 elements set to 0. This represents an empty 24-hour day.
        // We're assuming all buffers are 3 bytes long (24 bits for 24 hours).
        let combinedHours = [0, 0, 0];

        seat.bookings.forEach(booking => {
            // Convert the Buffer to an array of numbers for bitwise operations
            const hoursArray = [...booking.hours_booked];

            // Perform a bitwise OR operation to combine the hours
            combinedHours = combinedHours.map((val, index) => val | hoursArray[index]);
        });

        // After combining all the bookings' hours, convert back to a Buffer if needed
        const combinedHoursBuffer = Buffer.from(combinedHours);

        // Replace or modify this return as necessary. For example, you might want to return
        // the modified seat object with combined bookings:
        return {
            ...seat,
            hours_booked: combinedHoursBuffer
        };
    });

    // console.log(compressedBookings);
    // Remove the bookings array from the seat object
    const finalBookings = compressedBookings.map(seat => {
        delete seat.bookings;
        return seat;
    });

    console.log("Final bookings: ", finalBookings);
    return finalBookings;
}

// Other services
module.exports = {
    getSeats,
    getRooms,
    bookSeat,
    getAllBookings,
    getBookingHistory,
    getBookingsByRoomId,
    cancelBooking,
}