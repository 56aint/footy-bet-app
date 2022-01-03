import React from 'react';
import { render, screen } from '../test-utils';
import NavBar from '../../Components/navbar';

describe('<NavBar />', () => {
  it('should render a component resembling the snapshot', () => {
    const { asFragment } = render(<NavBar />);

    expect(asFragment).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const navBarText = 'Live Football';

    render(<NavBar />);
    expect(screen.getByText(navBarText)).toBeInTheDocument();
  });
  it('should consider nav as a navigation role', () => {
    render(<NavBar />);
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });
  it('should consider ul as a list role', () => {
    render(<NavBar />);
    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('presence of link tags', () => {
    render(<NavBar />);
    const link = screen.getAllByRole('link');

    expect(link).toBeTruthy();
  });
});
