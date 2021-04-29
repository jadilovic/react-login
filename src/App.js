import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/">
              <LoginForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
