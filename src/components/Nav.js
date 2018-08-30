import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'


class Nav extends Component {
  state = {
    isSignedIn: false
  }


  handleSignInOut =  () => {
    const { dispatch } = this.props
    const { isSignedIn } = this.state
    isSignedIn
      ? (
          false,
          this.navbarUserName = '',
          dispatch(handleSetAuthedUser('')),
          this.setState(() => ({
            isSignedIn: false
          }))
        )
      : ( this.setState(() => ({
            isSignedIn: true
          }))
        )

    console.log('handleSignOut: ', this.navbarUserName, this.isSignedIn)
  }

  render () {

  const { user } = this.props
  const { isSignedIn } = this.state

  let navbarUserName = user ? `Hello, ${user.name}` : ''


  console.log('navbarUserName: ', navbarUserName, isSignedIn)

  return (
    <nav className="nav">
      <div>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active">
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
          <li>
            {navbarUserName}
          </li>
          <li>
            <NavLink to="/signin" activeClassName="active" onClick={this.handleSignInOut}>
              {isSignedIn
                ? 'Sign Out'
                : `Sign In` }
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
  }
}

function mapStateToProps({ authedUser, users }) {
  console.log('mstp-props: ', authedUser, users)
  let userID = Object.values(authedUser)
  userID = userID[0]
  const user = users[userID]
  console.log('user: ', user)
  return {
    userID,
    user,
  }
}

export default connect(mapStateToProps)(Nav)
