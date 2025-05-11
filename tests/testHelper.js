const Product = require('../models/Product');

async function setupTestData() {
  await Product.create({
    _id: 'abc123',
    title: 'Classic T-Shirt',
    price: 19.99
  });
}

async function cleanupTestData() {
  await Product.deleteMany({});
}

module.exports = {
  setupTestData,
  cleanupTestData
};
