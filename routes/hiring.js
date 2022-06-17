const express=require('express');
const hiringController = require("../controllers/hiringController");

const router = express.Router();

router.get('/',hiringController.getAllHiring);


module.exports = router;