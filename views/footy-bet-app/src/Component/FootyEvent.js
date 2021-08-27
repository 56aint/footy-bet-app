import React from 'react';
import '../Styles/FootyEvent.css';

function FootyEvent() {
  return (
    <div className="footyevent">
      <div className="container">
        <h1>Football</h1>
        <div className="title-box">
          <p className="startTime">Event Date</p>
        </div>
        <div className="title-box">
          <p className="teamsName">Home-Team VS Away-Team</p>
        </div>
      </div>
    </div>
  );
}

export default FootyEvent;
