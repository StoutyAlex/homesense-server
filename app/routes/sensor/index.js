const express = require('express');
const sensorValidator = require('./sensorValidator');

const router = express.Router();

const sendResponse = (req, res) => {
  if (req.payload) {
    return res.json(req.payload);
  }
  return res.json({});
};

router.get('/',
  (req, res, next) => sensorValidator.validateSensor(req)
  .then(() => next(), err => next(err))
  .catch(err => next(err)),
  sendResponse);

router.post('/data', (req, res) => {
  console.log(req.body);
});

module.exports = router;
