import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, PrivateRoute, Error } from "./pages";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
