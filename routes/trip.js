var express = require("express");
var router = express.Router();

const { getAllTrips, createTrip } = require("../controllers/trip-controller");

/* GET trips listing. */
router.get("/", getAllTrips);

router.post("/create", createTrip);

module.exports = router;
