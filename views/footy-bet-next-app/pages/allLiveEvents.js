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
                <div>
                  <Link href="./singleEvents/eventTwo"><a className={styles.link}>{eventObj.data[0].name}</a></Link>
                </div>
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
                  <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[14].name}</a></Link>
                </div>
                <div>
                  <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[15].name}</a></Link>
                </div>
                <div>
                  <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[16].name}</a></Link>
                </div>
                <div>
                  <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[17].name}</a></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
