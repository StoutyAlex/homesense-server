const bookshelf = require('../database');

const Sensor = bookshelf.Model.extend({
    tableName: 'sensors',
    initialize: function () {
        this.constructor.__super__.initialize.apply(this, arguments);
    },
})

module.exports = bookshelf.model('Sensor', Sensor);
