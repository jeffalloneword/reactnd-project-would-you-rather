import React, { Component } from 'react'
import { connect } from 'react-redux'
import Signin from './components/Signin'

export class NoPageFound extends Component {
  render() {
    const { user } = this.props

    if (!user) {
      return <Signin />
    }

    return (
      <div>
        <h1 className="center">404 - Page Not Found!</h1>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    user: authedUser.authedUser,
  }
}

export default connect(mapStateToProps)(NoPageFound)
