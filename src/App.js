import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Dashboard from './components/Dashboard'
import NewQuestion from './components/NewQuestion'
import AskQuestion from './components/AskQuestion'
import Leaderboard from './components/Leaderboard'
import NoPageFound from './NoPageFound'
import Nav from './components/Nav'
import Signin from './components/Signin'
import Poll from './components/Poll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/poll/:id" component={Poll} />
            <Route path="/askquestion/:id" component={AskQuestion} />
            <Route path="/signin" component={Signin} />
            <Route component={NoPageFound} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)