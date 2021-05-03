import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Paginations from "./component/Paginations";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Paginations} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
