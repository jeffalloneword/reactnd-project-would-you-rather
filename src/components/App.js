import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
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




const pageAuth = {


  isAuthenticated: true,

}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      pageAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log('testauth', this.props.userID.authedUser !== undefined)

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
              <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
              <PrivateRoute exact path="/new" component={NewQuestion} />
              <Route exact path="/poll/:id" component={Poll} />
              <PrivateRoute
                exact
                path="/askquestion/:id"
                component={AskQuestion}
              />
              <Route exact path="/signin" component={Signin} />
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
    userID: authedUser,
  }
}

export default connect(mapStateToProps)(App)
