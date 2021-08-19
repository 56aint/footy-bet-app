(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const socketConnection = require('../connection')
const ws = socketConnection();

const eventTime = document.querySelector("#startTime");
const homeTeamName = document.querySelector("#homeName");
const awayTeamName = document.querySelector("#awayName");
const eventData = document.querySelector("#eventData");

function getEvent(event) {
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
    console.log(parsedData.data.startTime);
    homeTeamName.innerHTML = parsedData.data.competitors[0].name;
    awayTeamName.innerHTML = parsedData.data.competitors[1].name;

    console.log(parsedData);
  }); // logs all data to console
}

getEvent();

},{"../connection":"/js/connection.js"}]},{},[1]);
