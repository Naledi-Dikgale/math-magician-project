import operate from '../logic/operate';

describe('testing operate.js function', () => {
  test('expect tobe a string', () => {
    expect(typeof operate(2, 2, '+')).toBe('string');
  });

  test('expect 3 * 3 to be 9', () => {
    expect(operate(3, 3, 'x')).toBe('9');
  });
});
import React from  'react';
import operate from '../logic/operate';

describe('testing operate.js function', () => {
    test('expect tobe a string', () => {
        expect(typeof operate(2, 2, '+')).toBe('string');
    });

    test('expect 3 * 3 to be 9', () => {
        expect(operate(3, 3, 'x')).toBe('9');
    });

    test('expect 3 + 3 to be 6', () => {
        expect(operate(3, 3, '+')).toBe('6');
    });
})