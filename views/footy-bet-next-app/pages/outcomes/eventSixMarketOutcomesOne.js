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
          // LiveEvents(fa) Barnet Reserves V Southend United Reserves
          // name: "Half-Time/Full-Time"
          ws.sendRequest({
            keys: ['m.93649250'],
            type: 'getMarket',
            id: 93649250,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528499'],
            type: 'getOutcome',
            id: 367528499,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528505'],
            type: 'getOutcome',
            id: 367528505,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528510'],
            type: 'getOutcome',
            id: 367528510,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528515'],
            type: 'getOutcome',
            id: 367528515,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528521'],
            type: 'getOutcome',
            id: 367528521,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528527'],
            type: 'getOutcome',
            id: 367528527,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528537'],
            type: 'getOutcome',
            id: 367528537,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528542'],
            type: 'getOutcome',
            id: 367528542,
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

  const leagueType = socketData.map((outObj) => {
    if (outObj.type !== 'OUTCOME_DATA') return null;
    return outObj.data.typeName;
  });

  const leagueName = socketData.map((outObj) => {
    if (outObj.type !== 'OUTCOME_DATA') return null;
    return outObj.data.linkedEventTypeName;
  });

  const marketOne = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649250)) {
      return mktObj.data.name;
    }
  });
  const marketOneBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649250)) {
      return mktObj.data.livePriceLimit;
    }
  });
  const suspendedBet = socketData.map((outObj) => {
    if (outObj.type !== 'OUTCOME_DATA') return null;
    if ((outObj.type === 'OUTCOME_DATA') && (outObj.data.result.result === '-')) {
      return 'Suspended';
    }
    return outObj.data.result.result;
  });
  /* const eventTime = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') return null;
    return dataObj.data.startTime.toString();
  });

  const eventTeams = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') return null;
    return dataObj.data.name.toString().replace(/,/g, ' ');
  });
  const eventBet = socketData.map((dataObj) => {
    if (dataObj.type !== 'OUTCOME_DATA') return null;
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
    if (dataObj.type !== 'OUTCOME_DATA) return null;
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
  }); */

  return (
    <>
      <div className="footyevent" data-testid="market-outcome-id">
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
          <p>{`${marketOne[1]} Bet Outcome`}</p>
          {socketData.map((outObj) => {
            if (outObj.type !== 'OUTCOME_DATA') return null;
            return (
              <div>
                <table className={styles.responstable}>
                  <tbody>
                    <tr>
                      {`${outObj.data.name}`}
                    </tr>
                    <tr>
                      <th>{`${outObj.data.price.decimal}`}</th>
                    </tr>
                    <tr>
                      <td>{`${suspendedBet[2]}`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
