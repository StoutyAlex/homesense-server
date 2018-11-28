const request = require('supertest');
const app = require('../../../app');
const { mockSensorData } = require('../../mockData');

describe('/sensor', () => {
    describe('/data', () => {
        it('Return success true when posting valid data with valid id', () => {
            return request(app)
            .post('/api/sensor/data')
            .send(mockSensorData)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body.success).toEqual(true);
            });
        });
        it('Return success false when posting valid data with invalid id', () => {
            const data = Object.assign({}, mockSensorData, {});
            delete data.sensor_id;
            return request(app)
            .post('/api/sensor/data')
            .send(data)
            .expect('Content-Type', /json/)
            .expect(500)
            .then(res => {
                expect(res.body.success).toEqual(false);
            });
        });
    });
});