import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Signin from './Signin'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
              <Route path='/' exact component={Dashboard} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/new' exact component={NewQuestion} />
              <Route path='/signin' exact component={Signin} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
