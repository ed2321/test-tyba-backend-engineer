const request = require('supertest');
const app = require('../index');

//==================== user API test ====================

/**
 * Testing get all user endpoint
 */
 describe('GET /', function () {
    it('respond Hello, world..!!', function (done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect(200, done)
            .expect('Hello, world..!!');
    });
});

describe('POST /api/users/register', async () => {
    let data = {
        "firstName": "edinson",
        "lastName": "duran",
        "email": "edinsonduranrojas@gmail.com",
        "password": "12345"
    }
    it('respond with 200 created', async () => {
        await request(app)
            .post('/api/users/register')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response).to.deep.include({firstName:"edinson", lastName:"duran"});
            });
    });
});

describe('POST /api/users/login', async () => {
    let data = {
        "email": "edinsonduranrojas@gmail.com",
        "password": "12345"
    }
    it('respond with 200 created', async () => {
        await request(app)
            .post('/api/users/login')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response).to.deep.include({firstName:"edinson", lastName:"duran"});
            });
    });
});
describe('POST /api/users/logout', async () => {
    let data = {
        "email": "edinsonduranrojas@gmail.com",
        "password": "12345"
    }
    it('respond with 200 created', async () => {
        const objectExpect = {
            "status": true,
            "message": "logout successfully"
        }
        await request(app)
            .post('/api/users/logout')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect('x-access-token', '/json/')
            .expect(200)
            .then((response) => {
                expect(response).to.equal(objectExpect);
            });
    });
});