/* eslint-disable no-dupe-keys */
import { useState, useEffect } from 'react';
import socketConnection from '../api/apiCalls/connection';
import styles from '../../styles/FootyEvent.module.css';

export default function GetEvent() {
  const [isLoading, setLoading] = useState(true);
  const [socketData, setSocketData] = useState([]);

  useEffect(() => {
    const ws = socketConnection();

    ws.open()
      .then(() => {
        return [
          ws.sendRequest({
            type: 'subscribe',
            keys: ['e.21249939'],
            clearSubscription: false,
            type: 'getEvent',
            id: 21249939,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['m.93649849'],
            type: 'getMarket',
            id: 93649849,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367530493'],
            type: 'getOutcome',
            id: 367530493,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367530501'],
            type: 'getOutcome',
            id: 367530501,
          }),
        ];
      })
      .then((response) => { return console.log('Promise message response', response); })
      .catch((error) => { return console.log('Promise message error', error); });

    function handleMessage(response) {
      // console.log('Handling Single Event NO-2 message');
      const parsedSocketData = JSON.parse(response.data);
      setSocketData((currentSocketData) => {
        return [...currentSocketData, parsedSocketData];
      });
      console.log('parsedSocketData', parsedSocketData);
      setLoading(false);
    }
    ws.onMessage.addListener(handleMessage);
    /* return () => {
      ws.close();
      return ws.removeAllListeners();
    }; */
    return () => {
      ws.onClose.addListener((event) => {
        if (event.wasClean) {
          console.log(`Connection closed cleanly, code=${event.code}reason=${event.reason}`);
        } else {
          console.log('[close] Connection died');
        }
        ws.close();
      });
      ws.onError.addListener((error) => {
        alert(`[error] ${error.message}`);
      });
      return ws.removeAllListeners();
    };
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
    return dataObj.data.name.toString().replace(/,/g, ' ');
  });
  const eventBet = socketData.map((dataObj) => {
    if (dataObj.type !== 'MARKET_DATA') return null;
    return dataObj.data.name.toString().replace(/,/g, ' ');
  });
  const eventOutcomeOne = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') return null;
    if ((dataObj.type === 'OUTCOME_DATA') && (dataObj.data.outcomeId === 367530493)) {
      return dataObj.data.name.toString();
    }
    return null;
  });
  const eventOutcomeTwo = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') {
      return null;
    }
    if ((dataObj.type === 'OUTCOME_DATA') && (dataObj.data.outcomeId === 367530501)) {
      return dataObj.data.name.toString();
    }
    return null;
  });
  const eventOutcomeOnePrice = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') return null;
    if ((dataObj.type === 'OUTCOME_DATA') && (dataObj.data.outcomeId === 367530493)) {
      return dataObj.data.price.decimal.toString();
    }
    return null;
  });
  const eventOutcomeTwoPrice = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') return null;
    if ((dataObj.type === 'OUTCOME_DATA') && (dataObj.data.outcomeId === 367530501)) {
      return dataObj.data.price.decimal.toString();
    }
    return null;
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
          <div className={styles.titlebox}>
            <div key="eventId" className="event-time" data-testid="event-time-id">
              <p>{`DATE: ${eventTime[1]}`}</p>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div key="eventId" className="event-teams" data-testid="playing-teams-id">
              <p>
                {`TEAMS: ${eventTeams[1]}`}
              </p>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div key="marketId" className="event-market" data-testid="event-market-id">
              <table className="responstable">
                <tr>
                  <p>
                    {`${eventBet[2]} `}
                    <span>{`${eventOutcomeOne[3]} `}</span>
                    <span>{`${eventOutcomeOnePrice[3]} `}</span>
                  </p>
                </tr>
                <p>
                  {`${eventBet[2]} `}
                  <span>{`${eventOutcomeTwo[4]} `}</span>
                  <span>{`${eventOutcomeTwoPrice[4]} `}</span>
                </p>
              </table>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div key="outcomeId" className="event-outcome" data-testid="event-outcome-id">
              <p>
                {`OUTCOME: ${eventOutcomeTwo[4]}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
