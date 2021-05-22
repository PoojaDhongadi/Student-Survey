import './App.css';
import Home from "./components/Home/Home";
import Marks from "./components/Marks/Marks";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">  
      <Switch>
          <Route path="/" exact component={Home} />   
          <Route path="/marks" component={Marks} />
          <Route path="/leaderboard" component={Leaderboard} />
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
