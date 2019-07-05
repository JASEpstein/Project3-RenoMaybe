//Core Imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../../actions/authActions";
import axios from 'axios';
import keys from '../../config/reactKeys'
import convert from 'xml-js';

//Redux
import { Provider } from "react-redux";
import store from "../../store";

//Components
import Home from '../Home/index';
import Login from '../Login/index';
import Register from '../Register/index';
import PrivateRoute from "../PrivateRoutes/index";
import Dashboard from "../Dashboard/index";
import LogoutButton from '../Navbar/LogoutButton';
import SearchResults from '../SearchResults';
import SearchForm from '../SearchForm/SearchForm';
import AppBar from '../Navbar/AppBar';
import Landing from '../Landing';
import RenoStep1 from '../Renovations/Step1';
import RenoStep2 from '../Renovations/Step2';
import RenoStep3 from '../Renovations/Step3';
import MVP from '../Renovations/MVP'



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
    window.location.href = "../Login/index";
  }
}

class App extends Component {
  //State
  state = {
    formInput: {
      formAddress: '',
      formZip: ''
    },
    zillowData: {},
    renoChoices: {},
  }
  //Methods
  zillowRequest = (e) => {
    //e.preventDefault();
    const proxyURL = 'https://peaceful-island-88132.herokuapp.com/'
    return axios({
      method: 'post',
      url: proxyURL + 'http://www.zillow.com/webservice/GetSearchResults.htm',
      params: {
        'zws-id': keys.ZillowAPIKey,
        'citystatezip': this.state.formInput.formZip,
        'address': this.state.formInput.formAddress
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then((response) => {
      const resJSON = convert.xml2js(response.data, {compact: false, spaces: 4});
      this.setState({
        zillowData: {
          zEstimate: resJSON.elements[0].elements[2].elements[0].elements[0].elements[3].elements[0].elements[0].text,
          asOf: resJSON.elements[0].elements[2].elements[0].elements[0].elements[3].elements[1].elements[0].text
        }
      })
    })
  }
  


  handleChange = (event, name) => {
    this.setState({
      formInput:{
        ...this.state.formInput,
        [name]: event.target.value
      }
    })
  }

  handleChangeReno = (event, name) => {
    this.setState({
      renoChoices:{
        ...this.state.renoChoices,
        [name]: event.target.value
      }
    })
  }
  
 
//Render
  render() {
    return (
      <Provider store={store}>
        
          <div className="App">
            <AppBar>
              <LogoutButton/>
            </AppBar>
            <Router>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" render={(routeProps) =>
                  <SearchForm {...routeProps} 
                  zillowRequest={this.zillowRequest}
                  formInput={this.state.formInput}
                  handleChange={this.handleChange}
                  />
                } />
            <Route exact path="/search-results" render={(routeProps) =>
                  <SearchResults {...routeProps}
                  zEstimate={this.state.zillowData.zEstimate}
                  asOf={this.state.zillowData.asOf}
                  />
                } />
            <Route exact path="/MVP-selectors" render={(routeProps) =>
              <MVP/>
            } /> 
            {/* <Route exact path="/reno-step1" render={(routeProps) =>
                  <RenoStep1 {...routeProps}
                  handleChange={this.handleChangeReno}
                  />
                } />
            <Route exact path="/reno-step2" render={(routeProps) =>
                  <RenoStep2 {...routeProps}

                  />
                } />
            <Route exact path="/reno-step3" render={(routeProps) =>
                  <RenoStep3 {...routeProps}

                  />
                } /> */}
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            </Router>
          </div>
        
      </Provider>
    )
  }
}

export default App;