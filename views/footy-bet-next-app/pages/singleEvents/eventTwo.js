/* eslint-disable no-dupe-keys */
import { useState, useEffect } from 'react';
import socketConnection from '../api/apiCalls/connection';
import styles from '../../styles/FootyEvent.module.css';

const ws = socketConnection();

export default function GetEvent({ parsedData }) {
  // console.log(parsedData);
  const [isLoading, setLoading] = useState(false);
  const [socketData, setSocketData] = useState([]);

  useEffect(() => {
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: 'subscribe',
          keys: ['e.21249939'],
          clearSubscription: false,
          type: 'getEvent',
          id: 21249939,
        }),
      );
      ws.send(
        JSON.stringify({
          type: 'subscribe',
          keys: ['m.93649849'],
          type: 'getMarket',
          id: 93649849,
        }),
      );
      ws.send(
        JSON.stringify({
          type: 'subscribe',
          keys: ['o.367530501'],
          type: 'getOutcome',
          id: 367530501,
        }),
      );
    };

    function handleMessage(event) {
      console.log('Handling Single Event NO-2 message');
      setLoading(true);
      const parsedSocketData = JSON.parse(event.data);
      // console.log(parsedData);
      setSocketData((currentSocketData) => {
        return [...currentSocketData, parsedSocketData];
      });
      setLoading(false);
    }
    ws.addEventListener('message', handleMessage);
    return () => {
      return ws.removeEventListener('message', handleMessage);
    };
  }, []);

  const eventTime = socketData.map((dataObj) => {
    if (dataObj.type !== 'EVENT_DATA') return null;
    return dataObj.data.startTime.toString().split(',')
  });
  console.log(eventTime);

  const eventTeams = socketData.map((dataObj) => {
    if (dataObj.type !== 'EVENT_DATA') return null;
    return dataObj.data.name.toString().replace(/,/g, ' ');
  });
  const eventBet = socketData.map((dataObj) => {
    if (dataObj.type !== 'MARKET_DATA') return null;
    return dataObj.data.name.toString().replace(/,/g, ' ');
  });
  console.log(eventBet);
  const eventOutcome = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') return null;
    return dataObj.data.name.toString();
  });
  console.log(eventOutcome);

  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className={styles.container}>
          <h1 className={styles.hone}>Football</h1>
          <div className={styles.titlebox}>
            <div key="loading-key">
              {isLoading && <div className="loading">Not Connected... Please Refresh</div>}
            </div>
          </div>
          <div className={styles.titlebox}>
            <div key="eventId" className="event-time" data-testid="event-time-id">
              <p>{`DATE: ${eventTime[1]}` || `DATE: ${parsedData.events[0].startTime}`}</p>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div key="eventId" className="event-teams" data-testid="playing-teams-id">
              <p>
                {`TEAMS: ${eventTeams[1]}` || `TEAMS: ${parsedData.events[0].name}`}
              </p>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div key="marketId" className="event-market" data-testid="event-market-id">
              <p>
                {`BET: ${eventBet[2]}` || `BET: ${parsedData.events[0].markets}`}
              </p>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div key="outcomeId" className="event-outcome" data-testid="event-outcome-id">
              <p>
                {`OUTCOME: ${eventOutcome[3]}` || `OUTCOME: ${parsedData.events[0].scores.away}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    'http://localhost:8888/football/live?primaryMarkets=true&outComes=true',
  );
  const parsedData = await response.json();
  return {
    props: {
      parsedData,
    },
  };
};
