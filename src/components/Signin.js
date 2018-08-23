import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { handleSetAuthedUser } from '../actions/authedUser'

class Signin extends Component {
  state = {
    id: '',
  }

  handleSubmit = e => {
    e.preventDefault()

    const { id } = this.state
    const { dispatch } = this.props

    dispatch(handleSetAuthedUser(id))

    this.setState(() => ({
      id: '',
    }))
  }

  render() {
    const { users } = this.props

    const userIds = Object.keys(users).sort((a, b) =>
      users[a].name.localeCompare(users[b].name),
    )

    const options = []

    userIds.map(id =>
      options.push({
        value: id,
        text: users[id].name,
        image: { avatar: true, src: users[id].avatarURL },
      }),
    )

    return (
      <div>
        <div className="signin center">
          <div className="signin-header">
            <div className="container">
              <strong>Welcome to the Would You Rather App!</strong>
            </div>
            <div>Please sign in to continue</div>
          </div>
          <div className="container">
            <img
              src="https://alloneword.com/images/udacity/QnA.png"
              className="signin"
            />
          </div>
          <div>
            <Dropdown
              placeholder="Select user..."
              fluid
              selection
              scrolling
              options={options}
              className="align-left"
            />
          </div>
          <div>
            <button className="signin semi-square">Sign In</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: users,
  }
}

export default connect(mapStateToProps)(Signin)
