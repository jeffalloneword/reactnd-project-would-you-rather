import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  state = {
    isSignedIn: false,
  }

  handleSignInOut = () => {
    const { dispatch, history, user } = this.props
    //console.log('handleSignOut: ', user, history)

    if (user) {
      dispatch(handleSetAuthedUser(''))
      this.setState(() => ({
        isSignedIn: false,
      }))
      history.push('/')
    }
  }

  render() {
    const { user } = this.props
    //console.log('nav-user-render: ', user, history, user === true)

    let navbarUserName = user ? `Hello, ${user.name}` : '-->'

    return (
      <nav className="nav">
        <div>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" activeClassName="active">
                Leaderboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div> </div>
        <div>
          <ul>
            <li>{navbarUserName}</li>
            <li>
              <NavLink to="/signin" exact onClick={this.handleSignInOut}>
                {navbarUserName !== '-->' ? 'Sign Out' : 'Sign In'}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  //console.log('mstp-props: ', authedUser, users)
  let userID = authedUser.authedUser
  const user = users[userID]
  //console.log('user: ', user)
  return {
    user: user,
    userID: userID,
  }
}

export default connect(mapStateToProps)(withRouter(Nav))
