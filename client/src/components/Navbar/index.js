import React, { Component } from 'react';
import M from 'materialize-css';
import '@material-ui/icons';
//import SignIn from '../SignIn/index'

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
    <div id='navbar'>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo"><i className="large material-icons">home</i> RenoMaybe</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#!">Home Value</a></li>
            <li><a href="#!">Calculator</a></li>
            <li><a href="#!"><i className="large material-icons dropdown-trigger" data-target="auth-dropdown">account_circle</i></a></li>
          </ul>
        </div>
      </nav>

      <ul id="auth-dropdown" className="dropdown-content">
        <li><a href="/login">Sign In</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
    
    
    )
  }
    
}

export default Navbar;