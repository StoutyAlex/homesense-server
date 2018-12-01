const express = require('express');
const modelsHelper = require('../lib/modelsHelper');

const router = express.Router();

const sendResponse = (req, res) => {
  if (req.payload) {
    return res.json(req.payload);
  }
  return res.json({});
};

router.get('/', (req, res) => {
  req.payload = {
    success: true,
    status: 'running'
  }
  sendResponse(req, res);
});

router.get('/sensor/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const sensor = await modelsHelper.fetchModel('Sensor', { id }, []);
  sensorObject = Object.assign({}, sensor.toJSON(), {});
  req.payload = { success: true, data: sensorObject };
  sendResponse(req, res);
});


module.exports = router;