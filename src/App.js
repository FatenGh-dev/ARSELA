import React, { Component } from 'react';
import { BrowserRouter as Router,Link , Switch, Route } from 'react-router-dom';

import Auth from './Auth';
import './App.css';
import Nav from'./Nav';

const navStyle={

  color:'red'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        

     

      <Router>
      <ul>
        <li>
          <Link style={navStyle}  to="/">Home</Link>
          </li>
          <li>
          <Link style={navStyle} to="/authenticate">Authenticate</Link>
          </li>
          </ul>      
              <Switch>
          <Route path="/" exact component={() => <Nav />} />
          <Route path="/authenticate" exact component={() => <Auth />} />
        </Switch>
      </Router>
    </div>


    );
  }
}

          
  

export default App;
