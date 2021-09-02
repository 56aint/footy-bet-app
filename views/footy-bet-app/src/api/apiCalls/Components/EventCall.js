import { useState, useEffect } from 'react';
import socketConnection from '../../connection';
import NavBar from '../../../Component/NavBar.';
import '../../../Styles/FootyEvent.css';

const ws = socketConnection();

export default function GetEvent() {
  const [matchTime, setMatchTime] = useState('');
  const [teamNames, setTeamNames] = useState('');
  const [isLoading, setLoading] = useState(true);
  /* const [socketData, setSocketData] = useState([]); */

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
      setLoading(true);
      const parsedData = JSON.parse(event.data);
      console.log(parsedData);
      setMatchTime((parsedData.data.startTime));
      setTeamNames(parsedData.data.name);
      /* setSocketData((currentSocketData) => [...currentSocketData, parsedData]); */
      setLoading(false);
    }


    ws.addEventListener('message', handleMessage);

    return () => ws.removeEventListener('message', handleMessage);

  }, []);
  // console.log(matchTime);
  return (
    <>
    <NavBar />
      <div className="footyevent" data-testid="footy-event-id">
        <div className="container">
          <h1>Football</h1>
          <div className="title-box">
          {isLoading && <div className="loading">Not Connected... Please Refresh</div>}
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
          <div className="title-box">
            {/* <div className="socket-data" data-testid="socket-data-id">
              <div>{socketData.map((x) => x.toString())}</div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
