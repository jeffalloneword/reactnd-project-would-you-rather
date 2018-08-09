import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import graybar from '../images/dad7d7-pixel.png'

class Question extends Component {
  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist.</p>
    }

    const { name, avatar, optionOneText } = question

    return (
      <div>
        <div className="question-header">{`${name} asks:`}</div>
        <div className="question">
          <img src={avatar} alt={''} className="avatar" />
          <img src={graybar} className="vertical-bar" />
          <div>Would you rather</div>
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
