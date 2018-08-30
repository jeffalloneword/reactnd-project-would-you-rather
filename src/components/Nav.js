import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


class Nav extends Component {
  render () {

  const { user } = this.props
  let navbarUserName = ''

  console.log('authedUser-1A: ', user)
  //console.log('id-name: ', users[0].name)
  navbarUserName = user ? user.name : ' '

  console.log('navbarUserName: ', navbarUserName)


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
            Hello, Username
            {/* TODO: codify username in nav bar */}
          </li>
          <li>
            <NavLink to="/signin" activeClassName="active">
              Logout
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
