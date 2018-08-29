import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { handleSetAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Signin extends Component {
  state = {
    id: '',
    toHome: false,
  }

  handleChange = (e, { value }) => {
    const id = value
    console.log('handleChange: ', id)
    this.setState(() => ({
      id,
    }))
  }

  handleSubmit = e => {
    e.preventDefault()

    const id = this.state
    console.log('loginUserID: ', id)
    const { dispatch } = this.props

    dispatch(handleSetAuthedUser(id))

    this.setState(() => ({
      toHome: id ? true : false,
      id: '',
    }))

    console.log('lastID: ', id)
  }

  render() {
    const { users } = this.props
    const { toHome } =this.state

    console.log('toHome: ', toHome)

    if (toHome === true) {
      return <Redirect to="/" />
    }

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

    console.log('options: ', options)

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
              alt=""
            />
          </div>
          <form className="new-tweet" onSubmit={this.handleSubmit}>
            <div>
              <Dropdown
                placeholder="Select user..."
                fluid
                selection
                scrolling
                options={options}
                className="align-left"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button className="signin semi-square">Sign In</button>
            </div>
          </form>
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
