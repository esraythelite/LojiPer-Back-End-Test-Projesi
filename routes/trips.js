const express = require("express");
const Trip = require("../models/Trip");
const Bus = require("../models/Bus");
const router = express.Router();

router.get('/', (req, res) => {
    const tripDate = req.query.tripDate;
    Trip.find()
    .sort({tripDate:1})
    .then((trip) => {
        res.json(trip);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get("/:id", (req, res) => {
     Trip.findById(req.params.id).aggregate([
        {
            $lookup:{
                from: 'Bus',
                localField: 'busId',
                foreignField: '_id',
                as: 'Bus'
            }
        }
     ])
     .then((trip) => {
        res.json(trip);
     })
     .catch((err) => {
        res.json(err);
     });

});

router.post("/", (req, res) => {
    const trip = new Trip({
        tripdate : req.body.tripdate,
        departureFrom : req.body.departureFrom,
        tripTo: req.body.tripTo,
        price: req.body.price,
        totalSeats: req.body.totalSeats,
        user: req.userId 
    });
    trip.save();
    res.json(trip);
});

router.put("/:id", (req,res) => {
    Trip.findByIdAndUpdate(req.params.id,{
        tripdate : req.body.tripdate,
        departureFrom : req.body.departureFrom,
        tripTo: req.body.tripTo,
        price: req.body.price,
        totalSeats: req.body.totalSeats
    })
    .then((trip)=> {
        res.json(trip);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.delete("/:id", (req,res) => {
    Trip.findByIdAndDelete(req.params.id)
    .then((trip) => {
        res.json(trip);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;

/*
const trips = [
    {
        id: 1,
        tripdate: "12/07/2023",
        departureFrom: "Muğla",
        tripTo: "Sinop",
        price: 550,
        totalSeats: 30
    },
    {
        id: 2,
        tripdate: "25/05/2023",
        departureFrom: "Muğla",
        tripTo: "Artvin",
        price: 630,
        totalSeats: 28
    },
    {
        id: 3,
        tripdate: "02/67/2023",
        departureFrom: "Sinop",
        tripTo: "Muğla",
        price: 680,
        totalSeats: 32
    },
    {
        id: 4,
        tripdate: "30/04/2023",
        departureFrom: "Artvin",
        tripTo: "Sinop",
        price: 320,
        totalSeats: 0
    },
    {
        id: 5,
        tripdate: "12/07/2023",
        departureFrom: "Artvin",
        tripTo: "Muğla",
        price: 684,
        totalSeats: 28
    }
]
*/