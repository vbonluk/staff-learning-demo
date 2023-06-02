import { render, screen } from '@testing-library/react';
import Assistant from '../Assistant';

test('renders learn react link', () => {
  render(<Assistant />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
