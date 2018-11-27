const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./app/lib/errorHandler');

const api = require('./app/routes/index');

const app = express();


app.use(bodyParser.json({ type: ['application/json', 'application/csp-report'] }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);
app.use((err, req, res, next) => {
    errorHandler(res, err.statusCode, err.messageTitle, err.message);
});

module.exports = app;