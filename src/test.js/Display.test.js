import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Display from '../components/display';

describe('Display Component', () => {
  test('renders all necessary buttons', () => {
    const { getByText } = render(<Display />);
    const buttonTexts = ['AC', '+/-', '%', '÷', 'x', '-', '+', '.', '='];
    buttonTexts.forEach((text) => expect(getByText(text)).toBeInTheDocument());
  });

  test('toggles the sign of the number when "+/-" button is clicked', () => {
    const { getByText } = render(<Display />);
    fireEvent.click(getByText('9'));
    fireEvent.click(getByText('+/-'));
    expect(getByText('-9')).toBeInTheDocument();
  });
});