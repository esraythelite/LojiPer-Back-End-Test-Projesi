const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    tripdate: {type:Date, required: true},
    departureFrom: {type:String, required: true},
    tripTo: {type:String, required: true},
    price: {type:Number, required: true},
    totalSeats: {type:Number, required: true},
    busId: {
        type: String, required:true
    }
});

module.exports = mongoose.model("Trip", TripSchema);