const express=require('express');
const contestController = require("../controllers/contestController");

const router = express.Router();

router.get('/',contestController.getAllContest);


module.exports = router;