const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const baseUrl = "http://localhost:8888";

chai.use(chaiHttp);

describe("API test", () => {
  it("server/api is working", (done) => {
    chai
      .request(baseUrl)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("object");
        console.log(res.body);
        done();
      });
  });
  it("football-live endpoint is working", (done) => {
    chai
      .request(baseUrl)
      .get("/football/live")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("object");
        console.log(res.body);
        done();
      });
  });
  it("market endpoint is working", (done) => {
    chai
      .request(baseUrl)
      .get("/sportsbook/market/93649114")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an("object");
        console.log(res.body);
        done();
      });
  });
});
