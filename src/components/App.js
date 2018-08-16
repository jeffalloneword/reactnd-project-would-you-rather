import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import AskQuestion from './AskQuestion'
import Leaderboard from './Leaderboard'
import Nav from './Nav'
import Signin from './Signin'
import Poll from './Poll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          {this.props.loading === true ? (
            <div>
              <Route path="/" component={Signin} />
            </div>
          ) : (
            <div>
              <Nav />
              <Route exact path="/" component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/new" component={NewQuestion} />
              <Route exact path="/poll/:id" component={Poll} />
              <Route exact path="/askquestion/:id" component={AskQuestion} />
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
