import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import graypixel from '../images/dad7d7-pixel.png'

class AskQuestion extends Component {
  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist.</p>
    }

    const {
      name,
      avatar,
      optionOneText,
      optionTwoText,
      optionOneVotes,
      optionTwoVotes,
    } = question

    const optionOneVotesTotal = optionOneVotes.length
    const optionTwoVotesTotal = optionTwoVotes.length
    const totalVotes = optionOneVotesTotal + optionTwoVotesTotal

    return (
      <div className="question-container">
        <div className="question-header">{`${name} asks:`}</div>
        <div className="question-body">
          <img src={avatar} alt={''} className="avatar" />
          <img src={graypixel} alt={''} className="vertical-bar" />
          <div className="question-right">
            <span className="option-header">Would you rather</span>

            <span className="option-text">
              <p>{`${optionOneText}`}</p>
              <p>{`${optionOneVotesTotal} out of ${totalVotes} votes`}</p>

              <p>{`${optionTwoText}`}</p>
              <p>{`${optionTwoVotesTotal} out of ${totalVotes} votes`}</p>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const question = questions[id]
  console.log('id: ', id)
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  }
}
export default withRouter(connect(mapStateToProps)(AskQuestion))
