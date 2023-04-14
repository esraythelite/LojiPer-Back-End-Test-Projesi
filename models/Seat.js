const mongoose = require("mongoose");

SeatSchema = new mongoose.Schema({
    seatNumber : {type: Number, required: true} ,
    busId: {type: String, required: true},
    userId: {type: String},
    isEmpty: {type: Boolean, default:true}
})

module.exports = mongoose.model("Seat", SeatSchema);