export default function socketConnection() {
  const ws = new WebSocket('ws://localhost:8889');
  /* eslint-disable */
  ws.addEventListener('open', () => {
    console.log('Connection opened!');
  });

  ws.addEventListener('error', (event) => {
    console.log('WebSocket error: ', event);
  }); // logs error to console

  ws.onopen = function () {
    console.log('connected to the server');
  }; // logs connection to console
  // ws.addEventListener("message", (e) => console.log(e.data)); // logs all data to console

  ws.onmessage = function (message) {
    console.log('This is the received data:', message.data);
  }; // logs received data to console

  ws.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      alert('[close] Connection died');
    }
  }; // logs connection closed cleanly to the console

  ws.onerror = function(error) {
    alert(`[error] ${error.message}`);
  };
  return ws;
}
