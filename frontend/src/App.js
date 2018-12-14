import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to ="/auth/login">Login</Link>
          <Link to="/auth/signup">Signup</Link>
          <Link to="/auth/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <Routes />
      </div>
    );
  }
}

export default App;
