import React, { useEffect } from 'react';
import getEvent from '../api/apiCalls';
import FootyEvent from './FootyEvent';

function MatchDay() {
  // const [match, setMatch] = useState();

  useEffect(() => {
    getEvent();
  }, []);
  return (
    <>
      <FootyEvent />
    </>
  );
}

export default MatchDay;
