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
  const marketThree = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649434)) {
      return mktObj.data.name;
    }
  });
  const marketFour = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650155)) {
      return mktObj.data.name;
    }
  });
  const marketFive = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649360)) {
      return mktObj.data.name;
    }
  });
  const marketSix = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650016)) {
      return mktObj.data.name;
    }
  });
  const marketSeven = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650051)) {
      return mktObj.data.name;
    }
  });
  console.log('marketSeven', marketSeven);
  const marketEight = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93648663)) {
      return mktObj.data.name;
    }
  });
  console.log('marketEight', marketEight);
  const marketNine = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650079)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketEight', marketEight);
  const marketTen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650072)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketNine', marketNine[12]);
  const marketEleven = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650166)) {
      return mktObj.data.name;
    }
  });
  const marketTwelve = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650230)) {
      return mktObj.data.name;
    }
  });
  const marketThirteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650114)) {
      return mktObj.data.name;
    }
  });
  const marketFourteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93650205)) {
      return mktObj.data.name;
    }
  });
  const marketFivteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93745088)) {
      return mktObj.data.name;
    }
  });
  const marketSixteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649215)) {
      return mktObj.data.name;
    }
  });

  const marketSeventeen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649250)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketSixteen', marketSixteen[18])
  const marketEighteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93778225)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketSeventeen', marketSeventeen[19])

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
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[2].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketThree}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[3].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketFour}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[4].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketFive}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[5].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketSix}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[6].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketSeven}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[7].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketEight[10]}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[8].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketNine}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[9].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketTen}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[10].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketEleven}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[11].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketTwelve}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[12].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketThirteen}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[13].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketFourteen}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./singleEvents/eventFive"><a className={styles.link}>{eventObj.data[14].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./singleEvents/eventFive">
                            <a>{marketFivteen}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="/outcomes/eventSixMarketOutcomes"><a className={styles.link}>{eventObj.data[15].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="/outcomes/eventSixMarketOutcomes">
                            <a>{marketSixteen}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./singleEvents/eventSeven"><a className={styles.link}>{eventObj.data[16].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./singleEvents/eventSeven">
                            <a>{marketSeventeen}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <Link href="./allLiveEvents"><a className={styles.link}>{eventObj.data[17].name}</a></Link>
                      <td>
                        <div className={styles.market}>
                          <Link href="./allLiveEvents">
                            <a>{marketEighteen}</a>
                          </Link>
                        </div>
                      </td>
                    </th>
                  </tr>
                  <tr>
                    <td />
                  </tr>
                  <tr>
                    <th>
                      <td />
                    </th>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
