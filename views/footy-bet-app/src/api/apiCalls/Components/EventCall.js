import React, { useState, useEffect } from 'react';
import socketConnection from '../../connection';
import NavBar from '../../../Component/NavBar.';
import '../../../Styles/FootyEvent.css';

const ws = socketConnection();

export default function GetEvent() {
  // const [stored, setStored] = useState([]);
  // const [matchTime, setMatchTime] = useState('');
  // const [teamNames, setTeamNames] = useState('');
  // const [market, setMarket] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [socketData, setSocketData] = useState([]); // array of objects.

  useEffect(() => {
    ws.onopen = () => {
      ws.send(
        /* eslint-disable */
        JSON.stringify({
          type: 'subscribe',
          keys: ['e.21249934'],
          clearSubscription: false,
          type: 'getEvent',
          id: 21249934,
        }),
      );
      ws.send(
        /* eslint-disable */
        JSON.stringify({
          type: 'subscribe',
          keys: ['m.93648663'],
          type: 'getMarket',
          id: 93648663,
        }),
      );
    };
    function handleMessage(event) {
      console.log('Handling message');
      setLoading(true);
      const parsedData = JSON.parse(event.data);
      // console.log(parsedData);
      setSocketData((currentSocketData) => [...currentSocketData, parsedData]);
      setLoading(false);
    }

    ws.addEventListener('message', handleMessage);

    return () => ws.removeEventListener('message', handleMessage);
  }, []);


  const eventTime = socketData.map((x, index, arr) => {
    if (x.type === 'EVENT_DATA') {
      return x.data.startTime
    } 
  })
  const eventTeams = socketData.map((x, index, arr) => {
    if (x.type === 'EVENT_DATA') {
      return x.data.name
    } 
  })
  const eventBet = socketData.map((x, index, arr) => {
    if (x.type === 'MARKET_DATA') {
      return x.data.name
    } 
  })
  return (
    <>
      <NavBar />
      <div className="footyevent" data-testid="footy-event-id">
        <div className="container">
          <h1>Football</h1>
          <div className="title-box">
            <div key="uniqueId1">
            {isLoading && <div className="loading">Not Connected... Please Refresh</div>}
            </div>
          </div>
          <div className="title-box">
            <div key="uniqueId2" className="teams" data-testid="playing-teams-id">
              <p>Date: {eventTime}</p>
            </div>
          </div>
          <div className="title-box">
            <div key="uniqueId2" className="teams" data-testid="playing-teams-id">
              <p>Teams: {eventTeams}</p>
            </div>
          </div>
          <div className="title-box">
            <div key="uniqueId2" className="teams" data-testid="playing-teams-id">
              <p>BET: {eventBet}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
