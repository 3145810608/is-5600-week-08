const { get, getAll, add } = require('../db/products'); // Adjust as needed
const testHelper = require('./testHelper');

beforeAll(async () => {
  await testHelper.setupTestData();
});

afterAll(async () => {
  await testHelper.cleanupTestData();
});

test('should get a product by ID', async () => {
  const product = await get('abc123');
  expect(product.title).toBe('Classic T-Shirt');
});

test('should return all products', async () => {
  const all = await getAll();
  expect(all.length).toBeGreaterThan(0);
});
