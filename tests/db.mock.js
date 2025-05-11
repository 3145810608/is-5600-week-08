const { getAll } = require('../db/products');

jest.mock('../db/products');

test('mock getAll should return mocked products', async () => {
  const mockProducts = [{ title: 'Mock Product', price: 9.99 }];
  getAll.mockResolvedValue(mockProducts);

  const result = await getAll();
  expect(result.length).toBe(1);
  expect(result[0].title).toBe('Mock Product');
});
