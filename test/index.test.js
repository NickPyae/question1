const sum = require('../src/index');

test('calling sum(2, 3) should return 5', () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});

test('calling sum(2)(3) should return 5', () => {
    const result = sum(2)(3);
    expect(result).toBe(5);
  });
