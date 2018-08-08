import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import Home from './Home'
import Signin from './Signin'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          {this.props.loading === true ? (
            <Route path="/" component={Signin} />
          ) : (
            <div>
              <Nav />
              <Route path="/" exact component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/new" component={NewQuestion} />
              <Route path="/signin" component={Signin} />
            </div>
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
