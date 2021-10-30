import { useState, useEffect } from 'react';
import Link from 'next/link';
import socketConnection from '../api/apiCalls/connection';
import styles from '../../styles/FootyEvent.module.css';

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
          <h1 className={styles.hone}>Featured Leagues</h1>
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
                  <Link href="events/singleEvents/eventTwo"><a className={styles.link}>{eventObj.data[0].linkedEventTypeName}</a></Link>
                </div>
                <div>
                  <Link href="events/singleEvents/eventThree"><a className={styles.link}>{eventObj.data[1].linkedEventTypeName}</a></Link>
                </div>
                <div>
                  <Link href="events/singleEvents/eventFour"><a className={styles.link}>{eventObj.data[3].linkedEventTypeName}</a></Link>
                </div>
                <div>
                  <Link href="events/singleEvents/eventOne"><a className={styles.link}>Czech U19 League</a></Link>
                </div>
                <div>
                  <Link href="/leagues/fa-cup"><a className={styles.link}>English FA Cup</a></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}