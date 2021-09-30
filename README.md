#### TODO: Next state management


### This project has been achieved on Ubuntu 20.04.2 LTS OS

## STEPS

### Project plan
1. Set server up -- clone the api and fire it up in the docker
    
2. Write tests: k6 and mocha for the API

3. Use data provided in background.md to build frontend
   * Event                            Eventid     
	* Premier League                     Null
	* FA Cup                             Null
	* Football Live                      Null
	
	* LiveFootball  Betting-Price   Betting-Outcome  Betting-Market
                                                     e.g: Full Time Result: Home/Draw/Away
													      Suspended
    
   * ....more to be added and sorted with wireframing.


4. Connect frontend to the backend to build tha App.




  #### Fire up the server/api
  ```bash 
  docker run -it --rm --name sbg-tech-test-api -p 8888-8890:8888-8890 sbgtechtest/api:2.0.0
  or
  docker-compose up
  ```

  #### Tests
   **K6** --*api response*
   ```bash
      install: sudo apt-get update
               sudo apt-get install k6
      run: k6 run k6-test/ws-api_status.js
           k6 run k6-test/sBook-api_status.js
   ```

   **unit-test/mocha**
     - with the server running on http://localhost:8888/
   ```bash 
      to install: npm install --save-dev mocha chai chai-http
      to run: npm test
   ```
   **unit-test/sinon & nyc**
   ```bash
      to install: npm install --save-dev sinon nyc
      to run: npm test
   ```
      I have used **Chai** for the assert library, **Chai-Http** for HTTP request client library, and **Mocha** for test framework.
      I have used **sinon** to mock WebSocket Server and to spy/stub connection-code.
      nyc for code coverage

   
  ## Frontend
  1. I decided to make the UI simple by starting with pure `html`, `css` & `vanillaJS`. Then later incorporated: jquery, and move on to react and next.js

   ### Browserify, tinyify
  *  To bring WebSocket connection in one place, *`connnection.js`* has to be *`required`* in other *`js`* files where the connection is needed, but because the browser does not understand *`commonJS module-exports & require`*(nodeJs function for nodeJS environment only). Hence, *`browserify`*...
  *  Tinyify is a library/pluggin that will help compress the code by removing spaces, indent and unused codes.
  *  Because bundling makes debugging more difficult, thus, i used: `flag -d to get *sourcemap*`.
  ```bash
      to install: npm install browserify
      running:  browserify ./js/event/footyEvent.js > ./js/event/dist/footyEventBundle.js

      to install: npm install --save-dev tinyify
      running:  browserify ./js/event/footyEvent.js > ./js/event/dist/footyEventBundle.js --pluggin tinyify

      source-map: browserify ./js/event/footyEvent.js > ./js/event/dist/footyEventBundle.js -d

      Requiring connection.js by extracting it form the bundle: browserify ./js/event/footyEvent.js -x ./js/connection.js > ./js/event/dist/footyEventBundle.js
   ```
  2. I have gone a step further to implement the project with React and next.js
  ### React
  React is a frontend framework that has libraries that can manage the UI more cleanly and efficiently, especially with the *`useState`* and *`useEffect`* to manage the app states.
 I have used `*Airbnb style guide*`, which is considered the standard for developing React applications. And also had it configured with *`eslint`* and *`prettier`*

 ### Next
 Next.js is a React framework that has some advancement over React with extra features like: **`server-side rendering and generating static websites`**. Using *`getStaticProps`* and *`getServerSideProps`* to manage its states.


 I have made a little changes to eslint/prettier configurations to suit next.js.

 For Next to understand `webSocket`, I have had to install a third-party [websocket](https://www.npmjs.com/package/websocket) package.
 ```
 const W3CWebSocket = require('websocket').w3cwebsocket;
 ```

