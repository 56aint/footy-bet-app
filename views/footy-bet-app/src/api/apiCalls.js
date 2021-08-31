import { useState, useEffect } from 'react';
import socketConnection from './connection';

const ws = socketConnection();

export default function GetEvent() {
  const [matchTime, setMatchTime] = useState('');
  const [teamNames, setTeamNames] = useState('');
  // const eventTime = document.querySelector('.startTime');
  // const fixture = document.querySelector('.teamsName');
  useEffect(() => {
    ws.onopen = () => ws.send(
      JSON.stringify({
        type: 'subscribe' /* eslint-disable */,
          keys: ['e.21249934'],
          clearSubscription: false,
          type: 'getEvent',
          id: 21249934,
        }),
      );

    function handleMessage(event) {
      console.log('Handling message');
      const parsedData = JSON.parse(event.data);
      setMatchTime(parsedData.data.startTime);
      setTeamNames(parsedData.data.name);
    }

    ws.addEventListener('message', handleMessage);

    //const parsedData = JSON.parse(event.data);
    // console.log(parsedData);
    // console.log(parsedData.data);
    // console.log(parsedData.data.name);
    //eventTime.innerHTML = `Date & Time: ${parsedData.data.startTime}`;
    //fixture.innerHTML = parsedData.data.name;
    // logs all data to console

    return () => ws.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="footyevent" data-testid="footy-event-id">
      <div className="container">
        <h1>Football</h1>
        <div className="title-box">
          <div className="startTime" data-testid="sfooty-event-id">
            Date & Time: {matchTime}
          </div>
        </div>
        <div className="title-box">
          <div>{teamNames}</div>
        </div>
      </div>
    </div>
  );
}
