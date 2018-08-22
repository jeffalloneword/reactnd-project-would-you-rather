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

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.isAuthed === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          )
        }
      />
    )
    console.log('authedUser1: ', this.props.authedUser)
    console.log('isAuthed: ', this.props.isAuthed)

    return (
      <Router>
        <div>
          <div>
            <Nav />
          </div>
          <div>
            <Route exact path="/" component={Dashboard} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            <PrivateRoute path="/new" component={NewQuestion} />
            <Route exact path="/poll/:id" component={Poll} />
            <PrivateRoute
              exact
              path="/askquestion/:id"
              component={AskQuestion}
            />
            <Route path="/signin" component={Signin} />
          </div>
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  console.log('authedUser2: ', authedUser.length)

  return {
    isAuthed: authedUser !== '',
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(App)
