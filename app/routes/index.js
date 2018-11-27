const express = require('express');
const router = express.Router();

const debug = require('./debug');

//Routes
router.use('/debug', debug);

module.exports = router;
