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
  ws.addEventListener("message", (event) => console.log(event.data)); // logs all data to console
}

function getMarket() {
  ws.onopen = () =>
    ws.send(JSON.stringify({ type: "subscribe", keys: ["m.93650821"] }));
}

function getOutcome() {
  ws.onopen = () =>
    ws.send(JSON.stringify({ type: "subscribe", keys: ["m.93650821"] }));
}

function getLiveEvents() {
  ws.onopen = () =>
    ws.send(JSON.stringify({ type: "subscribe", keys: ["o.367533685"] }));
}

function allMarketUpdates() {
  ws.onopen = () =>
    ws.send(JSON.stringify({ type: "subscribe", keys: ["m.*"] }));
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
