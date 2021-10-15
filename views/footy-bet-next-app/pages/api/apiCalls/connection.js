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

    .catch((err) => { 
      return console.log('error', err); 
    });

  ws.onClose.addListener((event) => {
    if (event.wasClean) {
      alert(`Connection closed cleanly, code=${event.code}reason=${event.reason}`);
    } else {
      alert('[close] Connection died');
    }
    // ws.close();
  });
  ws.onError.addListener((error) => {
    alert(`[error] ${error.message}`);
  });

  return ws;
}

socketConnection();
