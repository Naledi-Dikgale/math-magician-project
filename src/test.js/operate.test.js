import operate from '../logic/operate';

describe('testing operate.js function', () => {
  test('expect 2 + 2 to be 4', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });

  test('expect 3 * 3 to be 9', () => {
    expect(operate(3, 3, 'x')).toBe('9');
  });

  test('expect 3 - 2 to be 1', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });

  test('expect 4 / 2 to be 2', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('expect 4 % 2 to be 0', () => {
    expect(operate(4, 2, '%')).toBe('0');
  });
});
