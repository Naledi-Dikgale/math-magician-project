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

<<<<<<< HEAD
  test('expect 0 and obj.next to be 0', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    expect(calculate(obj, '0')).toEqual({});
  });
});
=======
    test('expect 0 and obj.next to be 0', () => {
        const obj = {
            total: null,
            next: '0',
            operation: null,
        }
        expect(calculate(obj, '0')).toEqual({});
    });

    test('expect 0 and obj.next to be 0', () => {
        const obj = {
            total: null,
            next: null,
            operation: null,
        }
        expect(calculate(obj, 'AC')).toEqual(obj);
    });
})
>>>>>>> 246328c3522de47f8c6d02118c8e7a9f561c95e5
