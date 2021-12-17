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
          // name: "Draw No Bet"
          ws.sendRequest({
            keys: ['m.93649310'],
            type: 'getMarket',
            id: 93649310,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528723'],
            type: 'getOutcome',
            id: 367528723,
          }),
          ws.sendRequest({
            type: 'subscribe',
            keys: ['o.367528732'],
            type: 'getOutcome',
            id: 367528732,
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

  const marketFive = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649310)) {
      return mktObj.data.name;
    }
  });

  const suspendedBet = socketData.map((outObj) => {
    if (outObj.type !== 'OUTCOME_DATA') return null;
    if ((outObj.type === 'OUTCOME_DATA') && (outObj.data.result.result === '-')) {
      return 'Suspended';
    }
    return outObj.data.result.result;
  });

  // console.log('suspendedBet', suspendedBet);
  return (
    <>
      <div className="footyevent" data-testid="market-outcome-id">
        <div className={styles.container}>
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
          <p>{`${marketFive[1]} Bet Outcome`}</p>
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
