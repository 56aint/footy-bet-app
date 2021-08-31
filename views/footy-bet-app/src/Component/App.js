import React from 'react';
import '../Styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MatchDay from './MatchDay';
import GetEvent from '../api/apiCalls/Components/EventCall';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MatchDay} />
          <Route exact path="/my-favourite-team" component={GetEvent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
