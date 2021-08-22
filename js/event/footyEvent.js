$(document).ready(function () {
  /* $('div div ').css('background-color', 'green') */
  $('.container').css('background-color', 'purple')
  $('.title-box').css('background-color', 'grey')
  $('div div div ').css('background-color', 'green')
  /* document.getElementById('football-event').style.backgroundColor = 'green' */


  // Event
  const eventTime = document.querySelector("#startTime");
  const homeTeamName = document.querySelector("#homeName");
  const awayTeamName = document.querySelector("#awayName");
  const eventData = document.querySelector("#eventData");

  function getEvent() {
    const url = `ws://localhost:8889`;
    const ws = new WebSocket(url);

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


  const resultHomewWin = document.querySelector("#homeWin");
  const resultAwayWin = document.querySelector("#awayWin");

  function getMarket() {
    const url = `ws://localhost:8889`;
    const ws = new WebSocket(url);
    ws.onopen = () =>
      ws.send(
        JSON.stringify({
          type: "subscribe",
          keys: ["m.93648663"],
          type: "getMarket",
          id: 93648663,
        })
      );
    ws.addEventListener("message", (market) => {
      const parsedData = JSON.parse(market.data);

      resultHomewWin.innerHTML = parsedData.data.name;
      console.log(parsedData);
    });
  }
  getMarket();

  //Outcome
  const resultOutcome = document.querySelector("#draw");

  function getOutcome() {
    const url = `ws://localhost:8889`;
    const ws = new WebSocket(url);
    ws.onopen = () =>
      ws.send(
        JSON.stringify({
          type: "subscribe",
          keys: ["o.367526530"],
          type: "getOutcome",
          id: 367526530,
        })
      );
    ws.addEventListener("message", (outcome) => {
      const parsedData = JSON.parse(outcome.data);

      resultOutcome.innerHTML = parsedData.data.name;
      console.log(parsedData);
    });
  }

  getOutcome();

});