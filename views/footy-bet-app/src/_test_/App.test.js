import React from 'react';
import { render } from '@testing-library/react';
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
    expect(getByText("Football")).toBeInTheDocument();
    expect(getByText(/Date/)).toBeInTheDocument();
    expect(getByTestId("footy-event-id")).toBeInTheDocument();
    expect(getByTestId("event-time-id")).toBeInTheDocument();
    expect(getByTestId("playing-teams-id")).toBeInTheDocument();
  });
});
