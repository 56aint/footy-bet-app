function socketConnection() {

  const w = new WebSocket("ws://localhost:8888");

  w.addEventListener("message", (e) => console.log(e.data)); // logs all data to console

  w.addEventListener("error", function (event) {
    console.log("WebSocket error: ", event);
  }); // logs error to console

  w.onopen = function () {
    console.log("connected to the server");
  }; // logs connection to console

  w.onmessage = function (message) {
    console.log("Received:", message.data);
  }; // logs received data to console

  w.onclose = function (event) {
    console.log("Connection closed: ", event);
  }; // logs connection close to console
  return w;
};

module.exports = socketConnection;