import React from 'react';
import football from '../Images/football.png';
import '../Styles/HomePage.css';
// import { Link } from 'react-router-dom';
// import '../Styles/FootyEvent.css';
// import '../Styles/NavBar.css';

export default function HomePage() {
  /* eslint-disable */
  return (
    <>
      <div className="home-page">
        <section className="page">
          <marquee behavior="alternate" direction="right" scrollamount="5">
            <img src={football} className="ball"></img>My Team
          </marquee>
        </section>
      </div>
    </>
  );
}