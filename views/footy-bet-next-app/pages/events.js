import { useState, useEffect } from 'react';
import Link from 'next/link';
import socketConnection from './api/apiCalls/connection';
import styles from '../styles/FootyEvent.module.css';

const ws = socketConnection();

export default function GetLiveEvents() {
  const [isLoading, setLoading] = useState(false);
  const [socketData, setSocketData] = useState([]);
  const [match, setMatch] = useState([]);

  useEffect(() => {
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: 'getLiveEvents',
        }),
      );
    };

    const handleMessage = (events) => {
      console.log('Handling Events Message');
      setLoading(true);
      const parsedEventsData = JSON.parse(events.data);
      console.log(parsedEventsData);
      console.log(parsedEventsData.data[0]);
      setSocketData((currentSocketData) => {
        return [...currentSocketData, parsedEventsData];
      });
      setLoading(false);
    };
    ws.addEventListener('message', handleMessage);
    return () => {
      return ws.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className={styles.container}>
          <h1 className={styles.hone}>Live Football Fixtures</h1>
          <div className={styles.titlebox}>
            <div key="loading-key">
              {isLoading && <div className="loading">Loading...</div>}
            </div>
          </div>
          {socketData.map((eventObj) => {
            if (eventObj.type !== 'LIVE_EVENTS_DATA') return null;
            return (
              <div>
                <div key="eventId">
                  <Link href="./events">{eventObj.data[0].name}</Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[1].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[2].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[3].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[4].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[5].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[6].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[7].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[8].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[9].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[10].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[11].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[12].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[13].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[14].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[15].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[16].name}</a></Link>
                </div>
                <div>
                  <Link href="./events"><a>{eventObj.data[16].name}</a></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
