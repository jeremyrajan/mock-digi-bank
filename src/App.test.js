import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Mobile Digi Bank title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Mobile Digi Bank/i);
  expect(linkElement).toBeInTheDocument();
});
