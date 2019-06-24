//Core Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '@material-ui/core';
import '@material-ui/icons';
import M from 'materialize-css';
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../../actions/authActions";

//Redux
import { Provider } from "react-redux";
import store from "../../store";

//Components
import Home from '../Home/index';
import Navbar from '../Navbar/index';
import Login from '../Login/index';
import Register from '../Register/index';
import PrivateRoute from "../PrivateRoutes/index";
import Dashboard from "../Dashboard/index";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  //State
  
  //Functions
  componentDidMount() {
    M.AutoInit();
  }
  //Render
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
      </Router>
    </Provider>
    )
  }
}

export default App;