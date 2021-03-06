import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import graypixel from '../images/dad7d7-pixel.png'
import NoPageFound from '../NoPageFound'
import Signin from './Signin'

class Poll extends Component {
  render() {
    const UserID = this.props.authedUser.authedUser
    const { question } = this.props

    if (question === null) {
      return <NoPageFound />
    }

    if (!UserID) {
      return <Signin />
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

    const optionOnePercent =
      optionOneVotesTotal > 0
        ? Math.round((optionOneVotesTotal / totalVotes) * 100)
        : 0
    const optionTwoPercent =
      optionTwoVotesTotal > 0
        ? Math.round((optionTwoVotesTotal / totalVotes) * 100)
        : 0

    const optionOneStyle =
      optionOnePercent > 0
        ? { width: optionOnePercent + '%' }
        : { width: 10 + '%' }
    const optionTwoStyle =
      optionTwoPercent > 0
        ? { width: optionTwoPercent + '%' }
        : { width: 10 + '%' }

    let questionOneText,
      questionTwoText = ''

    optionOneVotes.includes(UserID) === true
      ? (questionOneText = '<-- Your Answer!')
      : (questionOneText = '')

    optionTwoVotes.includes(UserID) === true
      ? (questionTwoText = '<-- Your Answer!')
      : (questionTwoText = '')

    return (
      <div className="question-container">
        <div className="question-header">{`Asked by ${name}`}</div>
        <div className="question-body">
          <img src={avatar} alt={''} className="avatar" />
          <img src={graypixel} alt={''} className="vertical-bar" />
          <div className="question-right">
            <span className="option-header">Results:</span>

            <span className="option-text">
              <p className="option-text-poll">
                {`... ${optionOneText} ?`}
                <span className="question-text">{` ${questionOneText}`}</span>
              </p>
              <p>{`${optionOneVotesTotal} out of ${totalVotes} votes`}</p>
            </span>
            <div className="percent-bar">
              <div
                className="percent-value"
                style={optionOneStyle}
              >{`${optionOnePercent} %`}</div>
            </div>

            <span className="option-text">
              <p className="option-text-poll">
                {`... ${optionTwoText} ?`}
                <span className="question-text">{` ${questionTwoText}`}</span>
              </p>
              <p>{`${optionTwoVotesTotal} out of ${totalVotes} votes`}</p>
            </span>
            <div className="percent-bar">
              <div
                className="percent-value"
                style={optionTwoStyle}
              >{`${optionTwoPercent} %`}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props
  const question = questions[id]
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  }
}
export default connect(mapStateToProps)(Poll)
