const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type:String, required:true},
    age: {type:Number, required:true},
    gender: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    phone: {type:String, required:true},
    password: {type:String, required:true, min:6, max:1024},
    seats:[{
        seatId: {type: String},
    }]
});

module.exports = mongoose.model("User", UserSchema);