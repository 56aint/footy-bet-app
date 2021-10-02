import { useState, useEffect } from 'react';
import socketConnection from './api/apiCalls/connection';
import styles from '../styles/FootyEvent.module.css';

const ws = socketConnection();

export default function GetLiveEvents() {
  // const [isLoading, setLoading] = useState(false);
  const [socketData, setSocketData] = useState([]);

  useEffect(() => {
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: 'getLiveEvents',
        }),
      );
    };

    function handleMessage(events) {
      console.log('Handling Events Message');
      // setLoading(true);
      const parsedEventsData = JSON.parse(events.data);
      console.log(parsedEventsData);
      console.log(parsedEventsData.data[0]);
      setSocketData((currentSocketData) => {
        return [...currentSocketData, parsedEventsData];
      });
      // setLoading(false);
    }
    ws.addEventListener('message', handleMessage);
    return () => {
      return ws.removeEventListener('message', handleMessage);
    };
  }, []);

  const matches = socketData.map((eventObj) => {
    if (eventObj.type === 'LIVE_EVENTS_DATA') {
      const matchArray = [
        `${eventObj.data[1].name} \n`,
        `${eventObj.data[2].name} \n`,
        `${eventObj.data[3].name} \n`,
        `${eventObj.data[4].name} \n`,
      ];
      return matchArray;
    }
  });

  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className={styles.container}>
          <h1 className={styles.hone}>Live Football</h1>
          <div className={styles.titlebox}>
            <div key="eventId" className={styles.addlinebreak}>
              <p>{matches}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
