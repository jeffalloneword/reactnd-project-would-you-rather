import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import graypixel from '../images/dad7d7-pixel.png'
import { withRouter } from 'react-router-dom'

class Question extends Component {

  showDetails = (e, id, showAnswered) => {
    e.preventDefault()
    showAnswered
      ? this.props.history.push(`/poll/${id}`)
      : this.props.history.push(`/askquestion/${id}`)
  }


  render() {
    const { question, showAnswered } = this.props

    //console.log('showAnswered', this.props.showAnswered)

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
                onClick={(e) => this.showDetails(e, id, showAnswered)}>
                { showAnswered ? `Show Poll` : `Answer This` }
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id, showAnswered }) {
  const question = questions[id]

  return {
    showAnswered,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  }
}
export default connect(mapStateToProps)(withRouter(Question))
