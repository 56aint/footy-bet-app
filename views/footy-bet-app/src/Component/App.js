import '../Styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FootyEvent from './FootyEvent';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/"
          component = {FootyEvent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
