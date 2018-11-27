const express = require('express');
const router = express.Router();

const debug = require('./debug');
const sensor = require('./sensor');

//Routes
router.use('/sensor', sensor);
router.use('/debug', debug);

module.exports = router;
