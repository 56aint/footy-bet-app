import socketConnection from './connection';

const ws = socketConnection();

export default function getEvent() {
  const eventTime = document.querySelector('.startTime');
  const fixture = document.querySelector('.teamsName');

  ws.onopen = () => ws.send(
    JSON.stringify({
      type: 'subscribe', /* eslint-disable */
      keys: ['e.21249934'],
      clearSubscription: false,
      type: 'getEvent',
      id: 21249934,
    }),
  );

  ws.addEventListener('message', (event) => {
    const parsedData = JSON.parse(event.data);
    // console.log(parsedData);
    // console.log(parsedData.data);
    // console.log(parsedData.data.name);

    eventTime.innerHTML = `Date & Time: ${parsedData.data.startTime}`;
    fixture.innerHTML = parsedData.data.name;
  }); // logs all data to console
}
