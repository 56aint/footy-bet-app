const socketConnection = require('../connection')
const ws = socketConnection();


const resultOutcome = document.querySelector("#ft-outcome");

function getOutcome() {
  const url = `ws://localhost:8889`;
  const ws = new WebSocket(url);
  ws.onopen = () =>
    ws.send(
      JSON.stringify({
        type: "subscribe",
        keys: ["o.367526530"],
        type: "getOutcome",
        id: 367526530,
      })
    );
  ws.addEventListener("message", (outcome) => {
    const parsedData = JSON.parse(outcome.data);

    resultOutcome.innerHTML = parsedData.data.name;
    console.log(parsedData);
  });
}

window.onload = getOutcome();
