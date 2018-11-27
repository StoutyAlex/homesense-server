const express = require('express');
const sensorValidator = require('./sensorValidator');
const sensorManager = require('./sensorManager');

const router = express.Router();

const sendResponse = (req, res) => {
  if (req.payload) {
    return res.json(req.payload);
  }
  return res.json({});
};

router.post('/data',
  (req, res, next) => sensorValidator.validateSensor(req)
  .then(() => next(), err => next(err))
  .catch(err => next(err)),
  (req, res, next) => sensorManager.registerData(req)
  .then(() => next(), err => next(err))
  .catch(err => next(err)),
sendResponse);

module.exports = router;
