const errorHandler = (res, statusCode, context = '', message) => {
  if (res.headersSent) {
    return true;
  }
  const responseStatusCode = statusCode || 500;
  return res.status(responseStatusCode || 500).send({ success: false, error: message });
}

module.exports = errorHandler;
