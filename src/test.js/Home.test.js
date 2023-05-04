import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from './components/Home';

describe('Home', () => {
it('should display welcome page and paragraph', () => {
const { getByText } = render(<Home />);
const p = getByText(/welcome to our page/i);
expect(p).toBeInTheDocument();
expect(p.textContent).not.toBe('');
});
});