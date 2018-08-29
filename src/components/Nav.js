import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


class Nav extends Component {
  render () {

    const { users } = this.props



/*
  const { users, authedUser } = this.props
  let navbarUserName = '';


  if (authedUser != '') {
    navbarUserName = users[authedUser].name
  } else {
    navbarUserName = ''
  }
*/



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

function mapStateToProps({ users }) {
  return {
    users: users,
  }
}

export default connect(mapStateToProps)(Nav)
