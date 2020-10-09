import lifeIndicator from '../basic';

test('Indicator 1', () => {
  const result = lifeIndicator({name: 'Маг', health: 90});

  expect(result).toBe("healthy");
});

test('Indicator 2', () => {
  const result = lifeIndicator({name: 'Маг', health: 50});

  expect(result).toBe("wounded");
});

test('Indicator 3', () => {
  const result = lifeIndicator({name: 'Маг', health: 45});

  expect(result).toBe("wounded");
});

test('Indicator 4', () => {
  const result = lifeIndicator({name: 'Маг', health: 15});

  expect(result).toBe("wounded");
});

test('Indicator 5', () => {
  const result = lifeIndicator({name: 'Маг', health: 5});

  expect(result).toBe("critical");
});

