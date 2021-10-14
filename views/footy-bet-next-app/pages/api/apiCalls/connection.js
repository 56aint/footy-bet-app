import WebSocketAsPromised from 'websocket-as-promised';

const W3CWebSocket = require('websocket').w3cwebsocket;

export default function socketConnection() {
  const ws = new WebSocketAsPromised('ws://localhost:8889', {
    createWebSocket: (url) => { return new W3CWebSocket(url); },
    extractMessageData: (event) => { return event; }, // default
    packMessage: (data) => { return JSON.stringify(data); }, // send stringified data
    unpackMessage: (data) => { return (data); }, // receive parsed data
    attachRequestId: (data, requestId) => {
      return { id: requestId, ...data };
    }, // attach requestId to message as `id` field
    extractRequestId: (data) => { return data && data.id; }, // extract requestId from message */
  });


  ws.open()
    .then(() => { return console.log('connected'); })
  /* ws.onMessage.addListener((message) => {
    console.log(message.data);
  });
  ws.onClose.addListener(() => {
    console.log('disconnected');
  });
  ws.onError.addListener((error) => {
    console.log(error);
  }); */
  /*



    .then(() => {
      return ws.onmessage = function (event) {
        console.log('This is the received data:', event.data);
      }
    })
    .then(() => {
      return ws.onclose = function (event) {
        console.log('connection closed');
      };
    })
    .catch((err) => {
      console.log('error', err);
    });

    */
  /* (async () => {
    try {
      await ws.open();
      console.log('connected');
    }
    catch (error) {
      console.log('error', error);
    } finally {
      await ws.close();
    }
  })(); */

  return ws;
}

socketConnection();
