import React from 'react';
import GetEvent from '../api/apiCalls/EventCall';
import '../Styles/FootyEvent.css';

function MatchDay() {
  return (
    <>
      <GetEvent />
    </>
  );
}

export default MatchDay;
