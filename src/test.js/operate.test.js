import operate from '../logic/operate';

describe('testing operate.js function', () => {
  test('expect tobe a string', () => {
    expect(typeof operate(2, 2, '+')).toBe('string');
  });

  test('expect 3 * 3 to be 9', () => {
    expect(operate(3, 3, 'x')).toBe('9');
  });
});
