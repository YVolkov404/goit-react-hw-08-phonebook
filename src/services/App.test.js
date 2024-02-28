import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import { AppLayout } from 'components/layout/Layout';

test('renders learn react link', () => {
  render(<AppLayout />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});
