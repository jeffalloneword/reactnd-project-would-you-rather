import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import AskQuestion from './AskQuestion'
import Leaderboard from './Leaderboard'
import NotFound from './NotFound'
import Nav from './Nav'
import Signin from './Signin'
import Poll from './Poll'

const pageAuth = {
  isAuthenticated: this.isLoggedIn,
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       pageAuth.isAuthenticated
//       ? <Component {...props} />
//       : <Redirect to="/signin" />
//     }
//   />
// )

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/poll/:id" component={Poll} />
            <Route path="/askquestion/:id" component={AskQuestion} />
            <Route path="/signin" component={Signin} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  //console.log('testauth', typeof(authedUser.authedUser))

  if (typeof(authedUser.authedUser) === 'string') {
    if (authedUser.authedUser.length > 0) {
      pageAuth.isAuthenticated = true
    }
  } else {
      pageAuth.isAuthenticated = false
  }

  return {
    isLoggedIn: pageAuth.isAuthenticated,
  }

}

export default connect(mapStateToProps)(App)
