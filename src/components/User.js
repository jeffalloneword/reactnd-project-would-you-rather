import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    const { user } = this.props

    const { name, id, avatar } = user

    console.log(this.props)


    return (
      <div>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='tiny-avatar'
        />
        {` ${name}`}
      </div>
    )
  }
}

function mapStateToProps ({users}, { id }) {
  const user = users[id]

  return {
    user: user
  }
}

export default connect(mapStateToProps)(User)
