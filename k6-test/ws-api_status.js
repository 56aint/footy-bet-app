import { sleep, check } from "k6";
import http from "k6/http";

export let options = {
  vus: 5,
  duration: "5s",
  thresholds: {
    http_req_failed: ["rate<0.01"],  // rate of failed requests, http errors should be less than 1%
    http_req_duration: ["p(95)<500"], // 95% of requests should take less than 500ms
  },
};

export default function () {
  let res = http.get("http://localhost:8889");

  check(res, {
    "is status 426": (r) => r.status === 426,
    "text verification": (r) => r.body.includes("Upgrade Required"),
    //"log verification": (r) => console.log("body: ", r.body),
    //"status verification": (r) => console.log("status code: ", r.status),
    
  });

  sleep(Math.random() * 5);
}