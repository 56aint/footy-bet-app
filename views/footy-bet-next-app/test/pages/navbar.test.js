import React from 'react';
import { render, screen } from '../test-utils';
import NavBar from '../../Components/navbar';

describe('<App />', () => {
  it('renders without crashing', () => {
    const navBarText = 'Live Football';
    render(<NavBar />);
    expect(screen.getByText(navBarText)).toBeInTheDocument();
  });
});