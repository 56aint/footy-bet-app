import { useState, useEffect } from 'react';
import socketConnection from '../../connection';

const ws = socketConnection();

export default function GetEvent() {
  const [matchTime, setMatchTime] = useState('');
  const [teamNames, setTeamNames] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    ws.onopen = () => ws.send(
      /* eslint-disable */
        JSON.stringify({
          type: 'subscribe',
          keys: ['e.21249934'],
          clearSubscription: false,
          type: 'getEvent',
          id: 21249934,
        }),
      );

    function handleMessage(event) {
      console.log('Handling message');
      //setLoading(true);
      const parsedData = JSON.parse(event.data);
      setMatchTime(parsedData.data.startTime);
      setTeamNames(parsedData.data.name);
      setLoading(false);
    }


    ws.addEventListener('message', handleMessage);

    return () => ws.removeEventListener('message', handleMessage);

  }, []);
  
  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className="container">
          <h1>Football</h1>
          <div className="title-box">
          {isLoading && <div className="loading">Loading...wait.. or refresh</div>}
          </div>
          <div className="title-box">
            <div className="startTime" data-testid="event-time-id">
              Date & Time: {matchTime}
            </div>
          </div>
          <div className="title-box">
            <div className="teams" data-testid="playing-teams-id">
              {teamNames}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
