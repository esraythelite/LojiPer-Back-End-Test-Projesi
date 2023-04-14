const Seat = require("../models/Seat");
const Bus = require("../models/Bus");
const User = require("../models/User");
const{
    verifyToken,
    verifyTokenAndAuthorization
} = require("../middleware/verifyToken");

const router = require("express").Router();

router.put("/:id", verifyToken, async(req, res) => {
    try{
       
        const user = await User.findById(req.userId);
        const seat = await Seat.findById(req.id);
        const bus = await Bus.findById(req.busId);
        const seatNext = await Seat.findOne(req.seatNumber+1);
        const userNext = await User.find({seats:{$in:[seatNext]}});
        if(seat.isEmpty && user.seats.length<=5){
            if(user.gender, userNext.gender = "male" || user.gender, userNext.gender = "female"){
                user.seats[0] = seat;
                seat.isEmpty = false;
                bus.numberOfFullSeats++;
            }
        }
    } catch (err){
        res.json(err);
    }
})