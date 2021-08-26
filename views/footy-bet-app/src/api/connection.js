export const socketConnection = () {

  const ws = new WebSocket("ws://localhost:8889");
  //const ws = new WebSocket("ws://localhost:8888");
  
  
  ws.addEventListener("open", function() {
    console.log("Connection opened!");
  });

  ws.addEventListener("error", function (event) {
    console.log("WebSocket error: ", event);
  }); // logs error to console

  ws.onopen = function () {
    console.log("connected to the server");
  }; // logs connection to console

  //ws.addEventListener("message", (e) => console.log(e.data)); // logs all data to console

  ws.onmessage = function (message) {
    console.log("Received:", message.data);
  }; // logs received data to console

  ws.onclose = function (event) {
    console.log("Connection closed!: ", event);
  }; // logs connection close to console
  return ws;
};