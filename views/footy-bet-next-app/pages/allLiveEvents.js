import { useState, useEffect } from 'react';
import Link from 'next/link';
import socketConnection from './api/apiCalls/connection';
import styles from '../styles/FootyEvent.module.css';

export default function GetLiveEvents() {
  const [isLoading, setLoading] = useState(true);
  const [socketData, setSocketData] = useState([]);

  useEffect(() => {
    const ws = socketConnection();

    ws.open()
      .then(() => {
        return [
          ws.sendRequest({
            type: 'getLiveEvents',
            primaryMarkets: true,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93648663,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93649849,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93649011,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93649434,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650155,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93649360,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650016,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650051,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93648663,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650079,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650072,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650166,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650230,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650114,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93650205,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93745088,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93649215,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93649250,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93778225,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93649415,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93778234,
          }),
          ws.sendRequest({
            keys: ['m.93648663'],
            type: 'getMarket',
            id: 93649315,
          }),
        ];
      })
      .then((response) => { return console.log('Promise message response', response); });

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
  }, []);

  const marketOne = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649849)) {
      return mktObj.data.name;
    }
  });
  const marketTwo = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649011)) {
      return mktObj.data.name;
    }
  });

  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className={styles.container}>
          <h1 className={styles.hone}>Live Football Fixtures</h1>
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
          {socketData.map((eventObj) => {
            if (eventObj.type !== 'LIVE_EVENTS_DATA') return null;
            return (
              <div key="eventId">
                <table className={styles.responstable}>
                  <tr>
                    <th>
                      <Link href="./singleEvents/eventTwo"><a className={styles.link}>{eventObj.data[0].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./singleEvents/eventTwo">
                            <a>{marketOne}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[1].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketTwo}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[1].name}</a></Link>
                  </div>


                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[2].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[3].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[4].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[5].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[6].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[7].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[8].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[9].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[10].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[11].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[12].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[13].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./singleEvents/eventFive"><a className={styles.link}>{eventObj.data[14].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./singleEvents/eventSix"><a className={styles.link}>{eventObj.data[15].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./singleEvents/eventSeven"><a className={styles.link}>{eventObj.data[16].name}</a></Link>
                  </div>
                  <div>
                    <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[17].name}</a></Link>
                  </div>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
