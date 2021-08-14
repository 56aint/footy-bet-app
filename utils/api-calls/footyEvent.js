//const url = `ws://localhost:8889`;
//const ws = new WebSocket(url);

 //getting the DOM elements
 const eventTime = document.querySelector("#startTime");
 const homeTeamName = document.querySelector("#homeName");
 const awayTeamName = document.querySelector("#awayName");
 const eventData = document.querySelector("#eventData");
 
  
 
 function getEvent(event) {
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
/* 
     ws.onopen = function getEvent(event) {
      ws.send(
        JSON.stringify({
          type: "subscribe",
          keys: ["e.21249934"],
          clearSubscription: false,
          type: "getEvent",
          id: 21249934,
        })
      ); */
 
   ws.addEventListener("message", (event) => {
     /* const newMessage = document.createElement("div"); // Create a new message
     newMessage.innerHTML = event.data; // Set the message from webSocket API
     message.appendChild(newMessage); // Add the message to the DOM */
     //const data = event.data;

     const parsedData = JSON.parse(event.data);
     //console.log(parsedData);

     /* data.map((doc) => {
      eventTime.innerHTML = data[doc].startTime
     }) */

     eventTime.innerHTML = `Date & Time: ${parsedData.data.startTime}`
     console.log(parsedData.data.startTime);
     homeTeamName.innerHTML =  parsedData.data.competitors[0].name
     awayTeamName.innerHTML = parsedData.data.competitors[1].name
     //eventTime.innerHTML = JSON.parse(data).startTime
     //eventTime.innerHTML = data[0]
     //eventTime.innerHTML = data[1]
     //eventTime.innerHTML = data[2]
     //eventTime.innerHTML = JSON.parse(data).startTime;
     // eventTime.innerHTML = [1].data.startTime;
     //homeTeamName.innerHTML = data.competitors

     /* let eventDat = document.createElement("div");
     eventDat.textContent = data[2];
     eventTime.appendChild(eventDat); */

     //eventData.innerHTML = JSON.stringify(parsedData);
    
     //console.log(Object.keys(JSON.parse(data)));
     //console.log(JSON.parse(data));
     console.log(parsedData);
   }); // logs all data to console
 }
 
 getEvent();