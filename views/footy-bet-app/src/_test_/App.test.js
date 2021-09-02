import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../Component/App';

describe('App', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders correctly', () => {
    const { getByText, getByTestId, getAllByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    // expect(getAllByText(/My Team/)).toBeInTheDocument();
    expect(getByTestId('navbar-links-id')).toBeTruthy();
    expect(getByText(/Football/)).toBeInTheDocument();
    expect(getByText(/Home/)).toBeInTheDocument();
    expect(getByText(/Home/)).toHaveClass('navbar-item-home');
  });
});
