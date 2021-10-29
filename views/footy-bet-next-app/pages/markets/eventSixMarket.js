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
            keys: ['m.93649250'],
            type: 'getMarket',
            id: 93649250,
          }),
          ws.sendRequest({
            keys: ['m.93649487'],
            type: 'getMarket',
            id: 93649487,
          }),
          ws.sendRequest({
            keys: ['m.93649386'],
            type: 'getMarket',
            id: 93649386,
          }),
          ws.sendRequest({
            keys: ['m.93649189'],
            type: 'getMarket',
            id: 93649189,
          }),
          ws.sendRequest({
            keys: ['m.93649310'],
            type: 'getMarket',
            id: 93649310,
          }),
          ws.sendRequest({
            keys: ['m.93649271'],
            type: 'getMarket',
            id: 93649271,
          }),
          ws.sendRequest({
            keys: ['m.93649368'],
            type: 'getMarket',
            id: 93649368,
          }),
          ws.sendRequest({
            keys: ['m.93649315'],
            type: 'getMarket',
            id: 93649315,
          }),
          ws.sendRequest({
            keys: ['m.93649235'],
            type: 'getMarket',
            id: 93649235,
          }),
          ws.sendRequest({
            keys: ['m.93649229'],
            type: 'getMarket',
            id: 93649229,
          }),
          ws.sendRequest({
            keys: ['m.93777660'],
            type: 'getMarket',
            id: 93777660,
          }),
          ws.sendRequest({
            keys: ['m.93649356'],
            type: 'getMarket',
            id: 93649356,
          }),
          ws.sendRequest({
            keys: ['m.93649409'],
            type: 'getMarket',
            id: 93649409,
          }),
          ws.sendRequest({
            keys: ['m.93649207'],
            type: 'getMarket',
            id: 93649207,
          }),
          ws.sendRequest({
            keys: ['m.93649212'],
            type: 'getMarket',
            id: 93649212,
          }),
          ws.sendRequest({
            keys: ['m.93649217'],
            type: 'getMarket',
            id: 93649217,
          }),
          ws.sendRequest({
            keys: ['m.93649221'],
            type: 'getMarket',
            id: 93649221,
          }),
          ws.sendRequest({
            keys: ['m.93649224'],
            type: 'getMarket',
            id: 93649224,
          }),

          ws.sendRequest({
            keys: ['m.93777082'],
            type: 'getMarket',
            id: 93777082,
          }),
          ws.sendRequest({
            keys: ['m.93649396'],
            type: 'getMarket',
            id: 93649396,
          }),
          ws.sendRequest({
            keys: ['m.93649264'],
            type: 'getMarket',
            id: 93649264,
          }),
          ws.sendRequest({
            keys: ['m.93649377'],
            type: 'getMarket',
            id: 93649377,
          }),
          ws.sendRequest({
            keys: ['m.93649238'],
            type: 'getMarket',
            id: 93649238,
          }),
          ws.sendRequest({
            keys: ['m.93649242'],
            type: 'getMarket',
            id: 93649242,
          }),
          ws.sendRequest({
            keys: ['m.93777083'],
            type: 'getMarket',
            id: 93777083,
          }),
          ws.sendRequest({
            keys: ['m.93779109'],
            type: 'getMarket',
            id: 93779109,
          }),
        ];
      })
      .then((response) => {
        return response; /* console.log('Promise message response', response); */
      });

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
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649250)) {
      return mktObj.data.name;
    }
  });
  const marketOneBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649250)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  // console.log('marketOneBetLimit', marketOneBetLimit);
  const marketTwo = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649487)) {
      return mktObj.data.name;
    }
  });
  const marketThree = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649386)) {
      return mktObj.data.name;
    }
  });
  const marketFour = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649189)) {
      return mktObj.data.name;
    }
  });
  const marketFive = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649310)) {
      return mktObj.data.name;
    }
  });
  const marketSix = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649271)) {
      return mktObj.data.name;
    }
  });
  const marketSeven = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649368)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketSeven', marketSeven)
  const marketEight = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649315)) {
      return mktObj.data.name;
    }
  });
  const marketNine = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649235)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketEight', marketEight);
  const marketTen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649229)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketNine', marketNine[12]);
  const marketEleven = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93777660)) {
      return mktObj.data.name;
    }
  });
  const marketTwelve = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649356)) {
      return mktObj.data.name;
    }
  });
  const marketThirteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649409)) {
      return mktObj.data.name;
    }
  });
  const marketFourteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649207)) {
      return mktObj.data.name;
    }
  });
  const marketFivteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649212)) {
      return mktObj.data.name;
    }
  });

  const marketSixteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649217)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketSixteen', marketSixteen);

  const marketSeventeen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649221)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketSixteen', marketSixteen[18]);
  const marketEighteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649224)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketSeventeen', marketSeventeen[19])
  const marketNineteen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93777082)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketEighteen', marketEighteen[20])
  const marketTwenty = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649396)) {
      return mktObj.data.name;
    }
  });
  const marketTwentyOne = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649264)) {
      return mktObj.data.name;
    }
  });
  const marketTwentyTwo = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649377)) {
      return mktObj.data.name;
    }
  });

  const marketTwentyThree = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649238)) {
      return mktObj.data.name;
    }
  });
  const marketTwentyFour = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649242)) {
      return mktObj.data.name;
    }
  });
  const marketTwentyFive = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93777083)) {
      return mktObj.data.name;
    }
  });
  const marketTwentySix = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93779109)) {
      return mktObj.data.name;
    }
  });

  return (
    <>
      <div className="footyevent" data-testid="footy-event-id">
        <div className={styles.container}>
          <h3 className={styles.hone}>FA Cup-Qualifications</h3>
          <h4 className={styles.hone}>Barnet Reserves V Southend United Reserves</h4>
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
              <div key="mktObj.marketId">
                {/* <table className={styles.responstable}> */}
                <div>
                  <Link href="/outcomes/eventSixMarketOutcomes">
                    <a className={styles.link}>
                      {`${marketOne[1]}: (Bet Limit: ${marketOneBetLimit[1]})`}
                    </a>
                  </Link>
                  {/* <a>{`Bet Limit: ${marketOneBetLimit[1]}`}</a> */}
                </div>
                <div>
                  <Link href="./market"><a className={styles.link}>{marketTwo[2]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketThree[3]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketFour[4]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketFive[5]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketSix[6]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketSeven[7]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketEight[8]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketNine[9]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketTen[10]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketEleven[11]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketTwelve[12]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketThirteen[13]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketFourteen[14]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketFivteen[15]}</a></Link>
                </div>

                <div>
                  <Link href="./singleEvents/eventFive"><a className={styles.link}>{marketSixteen[16]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketSeventeen[17]}</a></Link>
                </div>

                <div>
                  <Link href="./market"><a className={styles.link}>{marketEighteen[18]}</a></Link>
                </div>
                <div>
                  <Link href="./market"><a className={styles.link}>{marketNineteen[19]}</a></Link>
                </div>
                <div>
                  <Link href="./singleEvents/eventSeven"><a className={styles.link}>{marketTwenty[20]}</a></Link>
                </div>
                <div>
                  <Link href="./singleEvents/eventSix"><a className={styles.link}>{marketTwentyOne[21]}</a></Link>
                </div>
                <div>
                  <Link href="./singleEvents/eventSix"><a className={styles.link}>{marketTwentyTwo[22]}</a></Link>
                </div>
                <div>
                  <Link href="./singleEvents/eventSix"><a className={styles.link}>{marketTwentyThree[23]}</a></Link>
                </div>
                <div>
                  <Link href="./singleEvents/eventSix"><a className={styles.link}>{marketTwentyFour[24]}</a></Link>
                </div>
                <div>
                  <Link href="./singleEvents/eventSix"><a className={styles.link}>{marketTwentyFive[25]}</a></Link>
                </div>
                {/* </table> */}
              </div>
            </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
