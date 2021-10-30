import { useState, useEffect } from 'react';
import Link from 'next/link';
import socketConnection from '../api/apiCalls/connection';
import styles from '../../styles/FootyEvent.module.css';

export default function GetLiveMarket() {
  const [isLoading, setLoading] = useState(true);
  const [socketData, setSocketData] = useState([]);

  useEffect(() => {
    const ws = socketConnection();
    ws.open()
      .then(() => {
        return [
          /* ws.sendRequest({
            type: 'subscribe',
            keys: ['m.*'],
          }), */
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
         /*  ws.sendRequest({
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
          }), */
        ];
      })
      .then((response) => { 
        return response /* console.log('Promise message response', response); */ });

    function handleMessage(response) {
      console.log('Handling Market Message');
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

  /* const socketDataOne = socketData[1];
  console.log('socketDataOne', socketDataOne); */
  const marketOne = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649849)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketOne', marketOne[2]);
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
  // console.log('marketSeven', marketSeven)
  const marketEight = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93648663)) {
      return mktObj.data.name;
    }
  });
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
  /* const marketEleven = socketData.map((mktObj) => {
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
  console.log('marketSixteen', marketSixteen[18])
  const marketEighteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93778225)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketSeventeen', marketSeventeen[19])
  const marketNineteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649415)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketEighteen', marketEighteen[20])
  const marketTwenty = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93778234)) {
      return mktObj.data.name;
    }
  });
  const marketTwentyOne = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649315)) {
      return mktObj.data.name;
    }
  }); */
  /* const marketTwenty = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649415)) {
      return mktObj.data.name;
    }
  });
  const marketTwentyOne = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649415)) {
      return mktObj.data.name;
    }
  });  */
  // console.log('FIRST-MARKET', marketOne[1]);
  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className={styles.container}>
          <h1 className={styles.hone}>BETS MARKET</h1>
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
          <div>
            {socketData && (
            <>
              <div>
                <div>
                  <Link href="/events/singleEvents/eventTwo"><a className={styles.link}>{marketOne[2]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketTwo[3]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketThree[4]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketFour[5]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketFive[6]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketSix[7]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketSeven[8]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketEight[9]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketNine[10]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketTen[11]}</a></Link>
                </div>
{/* 
                <div>
                  <Link href="./market"><a className={styles.link}>{marketEleven[13]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketTwelve[13]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketThirteen[14]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketFourteen[15]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketFivteen[16]}</a></Link>
                </div>

                <div>
                  <Link href="./singleEvents/eventFive"><a className={styles.link}>{marketSixteen[17]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketSeventeen[18]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketEighteen[19]}</a></Link>
                </div>
                <div>
                  <Link href="./market"><a className={styles.link}>{marketNineteen[20]}</a></Link>
                </div>
                <div>
                  <Link href="./singleEvents/eventSeven"><a className={styles.link}>{marketTwenty[21]}</a></Link>
                </div>
                <div>
                  <Link href="./singleEvents/eventSix"><a className={styles.link}>{marketTwentyOne[22]}</a></Link>
                </div> */}
              </div>
            </>
            )}
          </div>
          {/* {socketData.map((eventObj, i) => {
            if (eventObj.type !== 'MARKET_DATA') return null;
            return (
              <div key={i}> */}
          {/* <div>
                  <Link href="./market"><a className={styles.link}>{eventObj.data.name}</a></Link>
                </div> */}
          {/* <div>
                  <Link href="./market"><a className={styles.link}>{marketOne}</a></Link>
                </div> */}
          {/* <div>
                  <Link href="./market"><a className={styles.link}>{socketData[eventObj].name}</a></Link>
                </div>
                <div>
                  <Link href="./market"><a className={styles.link}>{socketData[eventObj].name}</a></Link>
                </div> */}
          {/* </div> */}
          {/*   );
          })} */}
        </div>
      </div>
    </>
  );
}
