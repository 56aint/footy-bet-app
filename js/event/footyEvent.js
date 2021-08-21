const socketConnection = require('../connection')
const ws = socketConnection();

const eventTime = document.querySelector("#startTime");
const homeTeamName = document.querySelector("#homeName");
const awayTeamName = document.querySelector("#awayName");
const eventData = document.querySelector("#eventData");

function getEvent() {
 /*  const url = `ws://localhost:8889`;
  const ws = new WebSocket(url); */

  ws.onopen = () =>
    ws.send(
      JSON.stringify({
        type: "subscribe",
        keys: ["e.21249934"],
        clearSubscription: false,
        type: "getEvent",
        id: 21249934,
      })
    );

  ws.addEventListener("message", (event) => {
    const parsedData = JSON.parse(event.data);

    eventTime.innerHTML = `Date & Time: ${parsedData.data.startTime}`;
    homeTeamName.innerHTML = parsedData.data.competitors[0].name;
    awayTeamName.innerHTML = parsedData.data.competitors[1].name;
  });
}

window.onload = getEvent();
