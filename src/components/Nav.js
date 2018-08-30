import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'


class Nav extends Component {

  handleSignInOut = () => {

    const { dispatch } = this.props
    const { userID } = this.props

    console.log('userID: ', userID)

    if ( userID ) {
      dispatch(handleSetAuthedUser('')),
      this.setState(() => ({
        isSignedIn: false
      }))
    }
  }



  render () {

    const { userID, user } = this.props
    console.log('userID-render: ', userID)

    let navbarUserName = user ? `Hello, ${user.name}` : '-->'

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
              <NavLink to="/new" exact activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" exact activeClassName="active">
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
              <NavLink to="/signin" exact onClick={this.handleSignInOut}>
                {navbarUserName != '-->'
                  ? 'Sign Out'
                  : 'Sign In' }
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
  let userID = Object.values(authedUser)
  userID = userID[0]
  const user = users[userID]
  //console.log('user: ', user)
  return {
    userID: userID,
    user: user,
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
