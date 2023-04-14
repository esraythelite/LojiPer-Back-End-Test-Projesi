const express = require('express');
const authRouter = require("./routes/auth");
const tripsRouter = require("./routes/trips");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const verifyToken = require("./middleware/verifyToken")
require("dotenv/config");
mongoose.set('strictQuery', true);
const app = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
/*
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.jl9bcuo.mongodb.net/?retryWrites=true&w=majority`,
(e) => {if (e){
    console.log(e);
}else {
    console.log("Connected to database!")
}
}
);
*/
mongoose.connect(`mongodb+srv://admin:8gF7nwlK2zwACAn7@cluster0.jl9bcuo.mongodb.net/?retryWrites=true&w=majority`,
(e) => {if (e){
    console.log(e);
}else {
    console.log("Connected to database!")
}
}
);

app.get("/", (req, res) => {
    res.send("Hi Esra!")
});

app.use("/auth", authRouter);
app.use("/trips", verifyToken, tripsRouter);

app.listen(5000, () => {
    console.log("Server is running on port the 5000")
});




