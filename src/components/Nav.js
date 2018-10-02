import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleSignInOut = () => {
    const { dispatch, user } = this.props
    if (user) {
      dispatch(handleSetAuthedUser(''))
    }
  }

  render() {
    const { user } = this.props

    let navbarUserName = user ? `Hello, ${user.name}` : ''

    return (
      <nav className="nav">
        <div>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                {navbarUserName !== '' ? 'Home' : ''}
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" activeClassName="active">
                {navbarUserName !== '' ? 'New Question' : ''}
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" activeClassName="active">
                {navbarUserName !== '' ? 'Leaderboard' : ''}
              </NavLink>
            </li>
          </ul>
        </div>
        <div> </div>
        <div>
          <ul>
            <li>{navbarUserName}</li>
            <li>
              <NavLink to="/" exact onClick={this.handleSignInOut}>
                {navbarUserName !== '' ? 'Sign Out' : ''}
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
