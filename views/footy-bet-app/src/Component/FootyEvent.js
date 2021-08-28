import React from 'react';
import '../Styles/FootyEvent.css';

function FootyEvent() {
  return (
    <div className="footyevent" data-testid="footy-event-id">
      <div className="container">
        <h1>Football</h1>
        <div className="title-box">
          <p className="startTime" data-testid="sfooty-event-id">Event Date</p>
        </div>
        <div className="title-box">
          <p className="teamsName" data-testid="teams-name-id">Home-Team VS Away-Team</p>
        </div>
      </div>
    </div>
  );
}

export default FootyEvent;
