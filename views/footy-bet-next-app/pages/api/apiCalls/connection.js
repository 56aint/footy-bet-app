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
    .catch((err) => { return console.log('error', err); });
  ws.onError.addListener((error) => {
    console.log('Error', error);
  });
  ws.onClose.addListener((close) => {
    console.log('disconnected', close);
  });

  return ws;
}

socketConnection();
