import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import graypixel from '../images/dad7d7-pixel.png'
import { Redirect, withRouter } from 'react-router-dom'

class Question extends Component {

  showDetails = (e, id) => {
    e.preventDefault()

    this.props.history.push(`/poll/${id}`)
  }


  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist.</p>
    }

    const { name, avatar, optionOneText, id } = question

    return (
      <div className="question-container">
        <div className="question-header">{`${name} asks:`}</div>
        <div className="question-body">
          <img src={avatar} alt={''} className="avatar" />
          <img src={graypixel} alt={''} className="vertical-bar" />
          <div className="question-right">
            <span className="option-header">Would you rather</span>
            <span className="option-text">
              <p>{`...${optionOneText}...`}</p>
            </span>
            <div className="question-right">
              <button
                className="question semi-square"
                onClick={(e) => this.showDetails(e, id)}>
                Show Poll
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  }
}
export default withRouter(connect(mapStateToProps)(Question))
