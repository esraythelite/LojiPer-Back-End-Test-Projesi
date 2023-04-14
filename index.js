const express = require('express');
const authRouter = require("./routes/auth");
const tripsRouter = require("./routes/trips");
const seatRouter = require("./routes/seat");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const verifyToken = require("./middleware/verifyToken")
require("dotenv/config");
mongoose.set('strictQuery', true);
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(`mongodb+srv://admin:8gF7nwlK2zwACAn7@cluster0.jl9bcuo.mongodb.net/?retryWrites=true&w=majority`,
(e) => {if (e){
    console.log(e);
}else {
    console.log("Connected to database!")
}
}
);



app.use("/auth", authRouter);
app.use("/trips", tripsRouter);
app.use("/seats", verifyToken, tripsRouter);
app.listen(5000, () => {
    console.log("Server is running on port the 5000")
});




