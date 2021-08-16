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
