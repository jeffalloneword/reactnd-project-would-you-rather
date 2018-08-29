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

    const { name, avatar, optionOneText, optionTwoText } = question

    return (
      <div className="question-container">
        <div className="question-header">{`${name} asks:`}</div>
        <div className="question-body">
          <img src={avatar} alt={''} className="avatar" />
          <img src={graypixel} alt={''} className="vertical-bar" />
          <div className="question-right">
            <span className="option-header">Would you rather</span>

            <form>
              <span className="option-text">
                <div className="radio">
                  <label for="option-one">
                    <input
                      id="option-one"
                      type="radio"
                      value="option1"
                      name="option-radios"
                    />
                    {`${optionOneText}`}
                  </label>
                </div>
                <div className="radio">
                  <label for="option-two">
                    <input
                      id="option-two"
                      type="radio"
                      value="option2"
                      name="option-radios"
                    />
                    {`${optionTwoText}`}
                  </label>
                </div>
                <p />
                <p />
              </span>
              <div className="question-right">
                <button className="question semi-square">Submit</button>
              </div>
            </form>
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
