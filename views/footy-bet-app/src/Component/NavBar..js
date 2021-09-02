import React from 'react';
import { Link } from 'react-router-dom';
// import '../Styles/FootyEvent.css';
import '../Styles/NavBar.css';

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-links" data-testid="navbar-links-id">
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link className="navbar-item-home" to="/">Home</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link className="navbar-item-myTeam" to="/my-favourite-team"/* onClick={() => window.location.reload()} */>My Team</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="/">Live Football</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="/">Market</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="/">Outcomes</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="/">Market Updates</Link>
          </li>
          <li className="navbar-links-item" data-testid="navbar-links-item-id">
            <Link to="/">Outcomes Updates</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
