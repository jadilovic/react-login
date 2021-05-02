import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, PrivateRoute, Error } from "./pages";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact={true}>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
