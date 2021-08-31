import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/FootyEvent.css';

export default function NavBar() {
  return (
    <>
      <div className="home-page">
        <ul className="navbar-links" data-testid="navbar-links-id">
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="./">Test WebSocket-Connection</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="./my-favourite-team">My Team</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="./">Live Football</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="./">Market</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="./">Outcomes</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="./">Market Updates</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="./">Outcomes Updates</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
