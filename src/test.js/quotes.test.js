import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Quotes from '../components/quotes';

describe('Quotes', () => {
  it('Should display loading when rendered', () => {
    const { getByText } = render(<Quotes />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
