//const ws = new WebSocket("ws://localhost:8889");

function getEvent() {
  const ws = new WebSocket("ws://localhost:8889");
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
    // console.log(event.data);
    console.log(JSON.parse(event.data));
  }); // logs all data to console
}
function getMarket() {
  const ws = new WebSocket("ws://localhost:8889");
  ws.onopen = () =>
    ws.send(
      JSON.stringify({
        type: "subscribe",
        keys: ["m.93650821"],
        type: "getMarket",
        id: 93650821,
      })
    );
  ws.addEventListener("message", (event) => {
    // console.log(event.data);
    console.log(JSON.parse(event.data));
  }); // logs all data to console
}

function getLiveEvents() {
  const ws = new WebSocket("ws://localhost:8889");
  ws.onopen = () =>
    ws.send(
      JSON.stringify({
        type: "getLiveEvents",
      })
    );
  ws.addEventListener("message", (event) => {
    // console.log(event.data);
    console.log(JSON.parse(event.data));
  }); // logs all data to console
}

function allMarketUpdates() {
  const ws = new WebSocket("ws://localhost:8889");
  ws.onopen = () =>
    ws.send(
      JSON.stringify({
        type: "subscribe",
        keys: ["m.*"],
      })
    );
  ws.addEventListener("message", (event) => {
    // console.log(event.data);
    console.log(JSON.parse(event.data));
  }); // logs all data to console
}

function allOutcomeUpdates() {
  ws.onopen = () =>
    ws.send(JSON.stringify({ type: "subscribe", keys: ["o.*"] }));
}

//getEvent","getMarket","getOutcome","getLiveEvents"],"responseTypes":

module.exports = {
  getEvent,
  getMarket,
  getOutcome,
  getLiveEvents,
  allMarketUpdates,
  allOutcomeUpdates,
};
