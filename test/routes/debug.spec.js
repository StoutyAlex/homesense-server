const request = require('supertest');
const app = require('../../app');

describe('/debug', () => {
    it('Return success true on debug route', () => {
        return request(app)
        .get('/api/debug')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
            expect(res.body.success).toEqual(true);
        });
    });
});