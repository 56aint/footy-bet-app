import React from 'react';
import '../Styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MatchDay from './matchDay';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MatchDay} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
