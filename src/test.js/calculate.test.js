import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import calculate from '../logic/calculate.js';
import Display from '../components/Display.js';

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

  test('expect 0 and obj.next to be empty object', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toEqual(obj);
  });
});

test('shold change symbol when +/- is clicked', () => {
  const { getByText } = render(<Display />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+/-'));
  expect(getByText('-1')).toBeInTheDocument();
});
