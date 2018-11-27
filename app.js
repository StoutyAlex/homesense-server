const express = require('express');
const bodyParser = require('body-parser');

const api = require('./app/routes/index');

const app = express();


app.use(bodyParser.json({ type: ['application/json', 'application/csp-report'] }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

module.exports = app;