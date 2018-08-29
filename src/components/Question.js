import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import graypixel from '../images/dad7d7-pixel.png'

class Question extends Component {
  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist.</p>
    }

    const { name, avatar, optionOneText } = question

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
              <button className="question semi-square">Show Poll</button>
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
export default connect(mapStateToProps)(Question)
