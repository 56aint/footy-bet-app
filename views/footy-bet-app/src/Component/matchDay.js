import React from 'react';
import GetEvent from '../api/apiCalls';
import '../Styles/FootyEvent.css';
// import FootyEvent from './FootyEvent';

function MatchDay() {
  // const [match, setMatch] = useState();
  /* useEffect(() => {
    GetEvent();
  }, []); */
  return (
    <>
      <GetEvent />
    </>
  );
}

export default MatchDay;
