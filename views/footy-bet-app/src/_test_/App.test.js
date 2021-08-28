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
    expect(getByText("Event Date")).toBeInTheDocument();
    expect(getByText(/Home/)).toBeInTheDocument();
    expect(getByText(/Away/)).toBeInTheDocument();
    expect(getByTestId("footy-event-id")).toBeInTheDocument();
    expect(getByTestId("footy-event-id")).toBeInTheDocument();
  });
});
