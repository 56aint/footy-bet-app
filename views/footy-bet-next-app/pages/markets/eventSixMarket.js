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
          // Half Time Both Teams To Score
          ws.sendRequest({
            keys: ['m.367529335'],
            type: 'getMarket',
            id: 367529335,
          }),
          ws.sendRequest({
            keys: ['m.367529346'],
            type: 'getMarket',
            id: 367529346,
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
  /* const marketOne = socketData.filter((mktObj) => mktObj.type === 'market').map(mktObj => {
    if (mktObj.data.marketId === 93649250) {
      return mktObj.data.name;
    }
  });
  console.log('marketOne' , marketOne); */
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
  // console.log('marketTwo', marketTwo);
  const marketTwoBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649487)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  // console.log('marketTwoBetLimit', marketTwoBetLimit);
  const marketThree = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649386)) {
      return mktObj.data.name;
    }
  });
  const marketThreeBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649386)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  const marketFour = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649189)) {
      return mktObj.data.name;
    }
  });
  const marketFourBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649189)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  const marketFive = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649310)) {
      return mktObj.data.name;
    }
  });
  const marketFiveBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649310)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  const marketSix = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649271)) {
      return mktObj.data.name;
    }
  });
  const marketSixBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649271)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  const marketSeven = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649368)) {
      return mktObj.data.name;
    }
  });
  // console.log('marketSeven', marketSeven)
  const marketSevenBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649368)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  const marketEight = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649315)) {
      return mktObj.data.name;
    }
  });
  const marketEightBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649315)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  const marketNine = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649235)) {
      return mktObj.data.name;
    }
  });
  const marketNineBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649235)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  // console.log('marketEight', marketEight);
  const marketTen = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649229)) {
      return mktObj.data.name;
    }
  });
  const marketTenBetLimit = socketData.map((mktObj) => {
    if (mktObj.type !== 'MARKET_DATA') return null;
    if ((mktObj.type === 'MARKET_DATA') && (mktObj.data.marketId === 93649229)) {
      return mktObj.data.liabilities.livePriceLimit;
    }
  });
  // console.log('marketNine', marketNine[12]);
  /* const marketEleven = socketData.map((mktObj) => {
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
  }); */

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
                <table className={styles.responstable}>
                  <tbody>
                    <tr>
                      <p>
                        <Link href="/outcomes/eventSixMarketOutcomesOne">
                          <a className={styles.link}>
                            {`${marketOne[1]}: `}
                            <span>{`(Bet Limit: ${marketOneBetLimit[1]})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>
                    <tr>
                      <p>
                        <Link href="/outcomes/eventSixMarketOutcomesTwo">
                          <a className={styles.link}>
                            {`${marketTwo[2]}: `}
                            <span>{`(Bet Limit: ${marketTwoBetLimit[2]})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>
                    <tr>
                      <p>
                        <Link href="/outcomes/eventSixMarketOutcomesThree">
                          <a className={styles.link}>
                            {`${marketThree[3]}: `}
                            <span>{`(Bet Limit: ${marketThreeBetLimit[3]})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>
                    <tr>
                      <p>
                        <Link href="/outcomes/eventSixMarketOutcomesFour">
                          <a className={styles.link}>
                            {`${marketFour[4]}: `}
                            <span>{`(Bet Limit: ${marketFourBetLimit[4]})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>
                    <tr>
                      <p>
                        <Link href="/outcomes/eventSixMarketOutcomesFive">
                          <a className={styles.link}>
                            {`${marketFive[5]}: `}
                            <span>{`(Bet Limit: ${marketFiveBetLimit[5]})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>

                    <tr>
                      <p>
                        <Link href="/markets/eventSixMarket">
                          <a className={styles.link}>
                            {`${marketSix[6]}: `}
                            <span>{`(Bet Limit: ${marketSixBetLimit[6]}})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>

                    <tr>
                      <p>
                        <Link href="/markets/eventSixMarket">
                          <a className={styles.link}>
                            {`${marketSeven[7]}: `}
                            <span>{`(Bet Limit: ${marketSevenBetLimit[7]}})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>

                    <tr>
                      <p>
                        <Link href="/markets/eventSixMarket">
                          <a className={styles.link}>
                            {`${marketEight[8]}: `}
                            <span>{`(Bet Limit: ${marketEightBetLimit[8]}})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>

                    <tr>
                      <p>
                        <Link href="/markets/eventSixMarket">
                          <a className={styles.link}>
                            {`${marketNine[9]}: `}
                            <span>{`(Bet Limit: ${marketNineBetLimit[9]}})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>

                    <tr>
                      <p>
                        <Link href="/markets/eventSixMarket">
                          <a className={styles.link}>
                            {`${marketTen[10]}: `}
                            <span>{`(Bet Limit: ${marketTenBetLimit[10]}})`}</span>
                          </a>
                        </Link>
                      </p>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
