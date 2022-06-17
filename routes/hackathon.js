const express=require('express');
const hackathonController = require("../controllers/hackathonController");

const router = express.Router();

router.get('/',hackathonController.getAllHackathon);


module.exports = router;