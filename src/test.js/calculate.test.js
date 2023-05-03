import calculate from '../logic/calculate.js';

describe('testing operate.js function', () => {
  test('expect tobe an object', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(typeof calculate(obj, 'AC')).toBe('object');
  });

  test('expect 0 and obj.next to be 0', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    expect(calculate(obj, '0')).toEqual({});
  });
});
