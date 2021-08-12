const url = `ws://localhost:8889`;
const ws = new WebSocket(url);

const message = document.getElementById("footyEvent");




function getEvent() {
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

    const newMessage = document.createElement("div"); // Create a new message
    newMessage.innerHTML = event.data; // Set the message from webSocket API
    message.appendChild(newMessage); // Add the message to the DOM
    
    //console.log(JSON.parse(event.data));
  }); // logs all data to console
}