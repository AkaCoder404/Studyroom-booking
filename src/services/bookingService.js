
// Import Models
const BookingModel = require('../models/bookingModel');

const getRooms = async () => {
    const rooms = await BookingModel.findAllRooms();
    return rooms;
}

// Other services
module.exports = {
    getRooms
}