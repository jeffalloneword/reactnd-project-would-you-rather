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
  isAuthenticated: false,
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
  state = {
    isAuthenticated: false,
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())

    //console.log('testauth', this.state.isAuthenticated, typeof(this.props.userID.authedUser))

    if (typeof(this.props.userID.authedUser) === 'string') {
      if (this.props.userID.authedUser.length > 0) {
      // console.log('you are authenticated!', (typeof(this.props.userID.authedUser) === 'string'), this.props.userID.authedUser.length)

        pageAuth.isAuthenticated = this.state.isAuthenticated

        this.setState({
          isAuthenticated: true
        })
      }
    }
  }
  render() {


    return (
      <Router>
        <div>
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
    userID: authedUser,
  }
}

export default connect(mapStateToProps)(App)
