const request = require('supertest');
const app = require('../app'); // adjust the path to your Express app

describe('Smoke tests', () => {
  test('should return 200 from root', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('should return 200 from /products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
  });

  test('should return 200 from /orders', async () => {
    const res = await request(app).get('/orders');
    expect(res.statusCode).toBe(200);
  });
});
