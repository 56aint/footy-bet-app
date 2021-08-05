import { sleep, check } from "k6";
import http from "k6/http";


export let options = {
  vus: 5,
  duration: "5s",
  thresholds: {
    http_req_failed: ["rate<0.01"],  
    http_req_duration: ["p(95)<500"], 
  },
};

export default function () {
  let res = http.get("http://localhost:8888/football/live");
  check(res, {
    "is status 200": (r) => r.status === 200,
    "text verification": (r) => r.body.includes("Football"),
  });
  sleep(Math.random() * 5);
}