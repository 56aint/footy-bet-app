(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function socketConnection() {

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
}


module.exports = socketConnection;

/* if(module) module.exports = socketConnection; // On node.js, use exports
else if(Window) Window.socketConnection = socketConnection(); // In browser, use window
else console.error('Unknown environment'); */

/* if (typeof module !== 'undefined') module.exports = { socketConnection };  */
},{}],2:[function(require,module,exports){
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

getEvent();

},{"../connection":1}]},{},[2]);
