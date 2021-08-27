import './App.css';
import HomePage from './components/Homepage';
import {
  HashRouter as  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <HomePage exact path="/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
