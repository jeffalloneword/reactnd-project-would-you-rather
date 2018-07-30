import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Signin extends Component {
  render() {
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
          <select className='signin semi-square'>
            <option value='zero'>Select User</option>
            {this.props.userIds.map((id) => (
              <option key={id}>
                <User id={id}/>
              </option>
            ))}
          </select>
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
    userIds: Object.keys(users)
      .sort((a,b) => users[a].toLowerCase < users[b].toLowerCase)
  }
}

export default connect(mapStateToProps)(Signin)
