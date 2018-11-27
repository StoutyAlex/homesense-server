const express = require('express');

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


module.exports = router;