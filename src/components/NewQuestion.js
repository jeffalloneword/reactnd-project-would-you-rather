import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveNewQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleChange = e => {
    e.persist()
    const optionKey = e.target.name
    const optionValue = e.target.value
    this.setState({ [optionKey]: optionValue })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { userID, dispatch } = this.props

    dispatch(handleSaveNewQuestion({
      optionOneText,
      optionTwoText,
      authedUser: userID,
    }))


    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true,
    }))
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state
    const { userID } = this.props

    if (!userID) {
      return <Redirect to="/signin" />
    }

    if (toHome) {
      return <Redirect to="/" />
    }

    return (
      <div className="new-question">
        <h3 className="center">Would You Rather?</h3>
        <form className="form-question" onSubmit={this.handleSubmit}>
          <textarea
            name="optionOneText"
            placeholder="Option 1"
            value={optionOneText}
            onChange={this.handleChange}
            className="textarea-question"
            maxLength={120}
          />
          <textarea
            name="optionTwoText"
            placeholder="Option 2"
            value={optionTwoText}
            onChange={this.handleChange}
            className="textarea-question"
            maxLength={120}
          />
          <button
            className="btn-question"
            type="submit"
            disabled={optionOneText === '' || optionTwoText === ''}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    userID: authedUser.authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
