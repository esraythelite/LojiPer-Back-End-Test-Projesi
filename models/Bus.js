const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
    tripId: {type:String, required: true},
    seats:[{
        seatId: {type: String},
    }],
    numberOfSeats: {type: Number, default:30},
    numberOfFullSeats: {type: Number, default:0}
});

module.exports = mongoose.model("Bus", BusSchema);