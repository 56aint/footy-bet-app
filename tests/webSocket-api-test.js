const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const baseUrl = "http://localhost:8889";

chai.use(chaiHttp);

describe("WebSocket API", () => {
  it("server/api is not responding to HTTP protocol", (done) => {
    chai
      .request(baseUrl)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(426);
        console.log(res.status);
        expect(res).to.be.an("object");
        //console.log(res);
        expect(res.text).to.be.a("string");
        expect(res.text).to.be.equal("Upgrade Required");
        console.log(res.text);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.be.undefined;
        console.log(res.body.message);
      
        //console.log(res.headers);
        //console.log(res);
        
        done();
      });
  });
  it("non existing / unlikely endpoint", (done) => {
    chai
      .request(baseUrl)
      .get("/xxxx")
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});