import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const appText = screen.getByText(/FootyBet/i);
  expect(appText).toBeInTheDocument();
});
