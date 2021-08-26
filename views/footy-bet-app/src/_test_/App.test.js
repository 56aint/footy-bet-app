import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from '../Component/App';


describe("App", () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  
  test("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const footyText = getByText(/footyEvent/i);
    expect(footyText).toBeInTheDocument();
  });
});
