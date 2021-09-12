import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import socketConnection from "./api/apiCalls/connection";
import styles from "../styles/FootyEvent.module.css";

const ws = socketConnection();

export default function GetEvent() {
  const router = useRouter();
  router.query.event;
  console.log(router.query.event);

  const [isLoading, setLoading] = useState(true);
  const [socketData, setSocketData] = useState([]);

  useEffect(() => {
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "subscribe",
          keys: ["e.21249934"],
          clearSubscription: false,
          type: "getEvent",
          id: 21249934,
        })
      );
      ws.send(
        JSON.stringify({
          type: "subscribe",
          keys: ["m.93648663"],
          type: "getMarket",
          id: 93648663,
        })
      );
      ws.send(
        JSON.stringify({
          type: "subscribe",
          keys: ["o.367526530"],
          type: "getOutcome",
          id: 367526530,
        })
      );
    };

    function handleMessage(event) {
      console.log("Handling message");
      setLoading(true);
      const parsedData = JSON.parse(event.data);
      // console.log(parsedData);
      setSocketData((currentSocketData) => [...currentSocketData, parsedData]);
      setLoading(false);
    }

    ws.addEventListener("message", handleMessage);

    return () => ws.removeEventListener("message", handleMessage);
  }, []);

  const eventTime = socketData.map((dataObj, index, arr) => {
    if (dataObj.type === "EVENT_DATA") {
      return dataObj.data.startTime;
    }
  });
  const eventTeams = socketData.map((dataObj, index, arr) => {
    if (dataObj.type === "EVENT_DATA") {
      return dataObj.data.name;
    }
  });
  const eventBet = socketData.map((dataObj, index, arr) => {
    if (dataObj.type === "MARKET_DATA") {
      return dataObj.data.name;
    }
  });
  const eventOutcome = socketData.map((dataObj, index, arr) => {
    if (dataObj.type === "OUTCOME_DATA") {
      return dataObj.data.name;
    }
  });

  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className={styles.container}>
          <h1 className={styles.hone}>Football</h1>
          <div className={styles.titlebox}>
            <div key="loading-key">
              {isLoading && (
                <div className="loading">Not Connected... Please Refresh</div>
              )}
            </div>
          </div>
          <div className={styles.titlebox}>
            <div
              key="eventId"
              className="event-time"
              data-testid="event-time-id"
            >
              <p>DATE: {eventTime}</p>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div
              key="eventId"
              className="event-teams"
              data-testid="playing-teams-id"
            >
              <p>TEAMS: {eventTeams}</p>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div
              key="marketId"
              className="event-market"
              data-testid="event-market-id"
            >
              <p>BET: {eventBet}</p>
            </div>
          </div>
          <div className={styles.titlebox}>
            <div
              key="outcomeId"
              className="event-outcome"
              data-testid="event-outcome-id"
            >
              <p>OUTCOME: {eventOutcome}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
