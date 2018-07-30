import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Signin from './Signin'

class Home extends Component {
  render() {
    return (
      <div>
        <Signin />
        {/* TODO: show signin component if no authed user */}
        <Dashboard />
      </div>
    )
  }
}

export default Home
