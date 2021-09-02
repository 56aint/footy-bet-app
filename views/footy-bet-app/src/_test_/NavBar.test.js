import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from '../Component/NavBar.';
import '../Styles/NavBar.css';

describe('NavBar', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
