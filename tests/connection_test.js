const sinon = require("sinon");
const { expect } = require("chai");
const socketConnection = require("../utils/connection");

class WebSocket {
  //constructor(uri) {} 
  //onopen() {}
  //onmessage() {}
  addEventListener(event, listener) {}
}
global.WebSocket = WebSocket;

describe("Socket", () => {
  it("connection code works", () => {
    const logSpy = sinon.spy(console, "log");
    const socketTest = socketConnection();
    const onopenSpy = sinon.spy(socketTest, "onopen");
    const onmessageSpy = sinon.spy(socketTest, "onmessage");
    const oncloseSpy = sinon.spy(socketTest, "onclose");
    
    onopenSpy();
    expect(logSpy.firstCall.calledWith("connected to the server")).to.be.true;

    const mMessage = { data: "this is fake data from sinon " };
    onmessageSpy(mMessage);
    expect(logSpy.secondCall.calledWith("Received:", mMessage.data)).to.be.true;

    const event = {};
    oncloseSpy(event);
    expect(logSpy.thirdCall.calledWith("Connection closed!: ", event)).to.be.true;
  });
});