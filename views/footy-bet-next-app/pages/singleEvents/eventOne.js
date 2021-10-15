/* eslint-disable no-dupe-keys */
import { useState, useEffect } from 'react';
import socketConnection from '../api/apiCalls/connection';
import styles from '../../styles/FootyEvent.module.css';

// const ws = socketConnection();

export default function GetEvent({ parsedData }) {
  // console.log(parsedData);
  const [socketData, setSocketData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const ws = socketConnection();
    ws.open()
      .then(() => {
        return [
          ws.sendRequest({
            type: 'subscribe',
            keys: ['e.21249934'],
            clearSubscription: false,
            type: 'getEvent',
            id: 21249934,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93648663,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367526530'],
            type: 'getOutcome',
            id: 367526530,
          }),
        ];
      })
      .then((response) => { return console.log('Promise message response', response); })
      .catch((err) => { return console.log('Promise message error', err); });

    function handleMessage(response) {
      console.log('Handling Events Message');
      const parsedSocketData = JSON.parse(response.data);
      setSocketData((currentSocketData) => {
        return [...currentSocketData, parsedSocketData];
      });
      console.log('parsedSocketData', parsedSocketData);
      setLoading(false);
    }
    ws.onMessage.addListener(handleMessage);
    return () => {
      return ws.removeAllListeners();
    };
    /* ws.onClose.addListener((event) => {
      if (event.wasClean) {
        console.log(`Connection closed cleanly, code=${event.code}reason=${event.reason}`);
      } else {
        console.log('[close] Connection died');
      }
    });
    ws.onError.addListener((error) => {
      console.log(`[error] ${error.message}`);
    }); */
  }, []);

  const leagueType = socketData.map((dataObj) => {
    if (dataObj.type !== 'EVENT_DATA') return null;
    return dataObj.data.typeName;
  });

  const leagueName = socketData.map((dataObj) => {
    if (dataObj.type !== 'EVENT_DATA') return null;
    return dataObj.data.linkedEventTypeName;
  });

  const eventTime = socketData.map((dataObj) => {
    if (dataObj.type !== 'EVENT_DATA') return null;
    return dataObj.data.startTime.toString();
  });

  const eventTeams = socketData.map((dataObj) => {
    if (dataObj.type !== 'EVENT_DATA') return null;
    return dataObj.data.name.toString();
  });
  const eventBet = socketData.map((dataObj) => {
    if (dataObj.type !== 'MARKET_DATA') return null;
    return dataObj.data.name.toString();
  });

  const eventOutcome = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') return null;
    return dataObj.data.name.toString();
  });

  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className={styles.container}>
          <h1 className={styles.hone}>{leagueType}</h1>
          <h3 className={styles.hone}>{leagueName}</h3>
          <div className={styles.titlebox}>
            <div key="loading-key">
              {isLoading && (
                <div className={styles.loading}>
                  <div className={styles.spinner1} />
                  <div className={styles.spinner2} />
                </div>
              )}
            </div>
          </div>
          {/* <div className={styles.titlebox}>
            <div key="loading-key">
              {socketData === undefined && (
              <div className={styles.loading}>
                <div className={styles.spinner1} />
                <div className={styles.spinner2} />
              </div>
              )}
            </div>
          </div>
          <div className={styles.titlebox}>
            <div key="load-key">
              {(socketData === null) && (
                <div className={styles.loading}>
                  <div className={styles.spinner1} />
                  <div className={styles.spinner2} />
                </div>
              )}
            </div>
          </div> */}
          <div>
            {socketData && (
            <>
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
            </>
            )}
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
