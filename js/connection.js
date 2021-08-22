function socketConnection() {

  const ws = new WebSocket("ws://localhost:8889");
  
  ws.addEventListener("open", function() {
    console.log("Connection opened!");
  });

  ws.addEventListener("error", function (event) {
    console.log("WebSocket error: ", event);
  }); 

  ws.onopen = function () {
    console.log("connected to the server");
  };

  ws.onmessage = function (message) {
    console.log("Received:", message.data);
  };

  ws.onclose = function (event) {
    console.log("Connection closed!: ", event);
  }; 
  return ws;
};


//module.exports = socketConnection;