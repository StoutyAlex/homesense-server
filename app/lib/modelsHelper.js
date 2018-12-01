const Sensor = require('./models/sensor');

const getModel = (model) => {
  switch (model) {
    case 'Sensor':
      return new Sensor();
  }
};

const fetchModel = (model, attributes = {}, relations = []) => new Promise((resolve, reject) =>
  getModel(model)
    .where(attributes)
    .fetch({ withRelated: relations })
    .then((record) => {
      if (!record) {
        return reject({
          statusCode: 404,
          messageTitle: 'Fetch failed',
          message: `${model} model not found with attributes ${JSON.stringify(attributes)}`,
        });
      }
      return resolve(record);
    }));

module.exports = {
  getModel,
  fetchModel,
};