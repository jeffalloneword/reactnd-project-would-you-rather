import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

class Signin extends Component {
  render() {
    const { users } = this.props

    const userIds = Object.keys(users)
        .sort((a,b) => users[a].name.localeCompare(users[b].name))

    const options = []

    userIds.map((id) => (
      options.push({
        value: id,
        label: users[id].name
      })
    ))

    return (
      <div className='signin center'>
        <div className='signin-header'>
          <div className='container'><strong>Welcome to the Would You Rather App!</strong></div>
          <div>Please sign in to continue</div>
        </div>
        <div className='container'>
          <img
            src='https://alloneword.com/images/udacity/QnA.png'
            className='signin'
          />
        </div>
        <div>
          <Select
            onChange={options}
            options={options}
            placeholder='Select user...'
          />
        </div>
        <div>
          <button className='signin semi-square'>
            Sign In
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {

  return {
    users: users
  }
}

export default connect(mapStateToProps)(Signin)
