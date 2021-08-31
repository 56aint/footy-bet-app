import React from 'react';
import GetEvent from '../api/apiCalls/Components/EventCall';
import Home from './NavBar.';
import '../Styles/FootyEvent.css';

function MatchDay() {
  return (
    <>
      <Home />
      <GetEvent />
    </>
  );
}

export default MatchDay;
