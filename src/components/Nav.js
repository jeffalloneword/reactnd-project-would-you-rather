import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
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
