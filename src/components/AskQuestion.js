import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import graypixel from '../images/dad7d7-pixel.png'
import { handleAnswerQuestion } from '../actions/questions'

class AskQuestion extends Component {
  state = {
    chosenOption: '',
    toHome: false,
  }

  handleChange = (e) => {
    const chosenOption = e.target.value
    console.log('handleChange: ', chosenOption)
    this.setState(() => ({
      chosenOption,
    }))
  }

  handleSubmit = e => {
    e.preventDefault()

    const { chosenOption } = this.state
    const { dispatch, authedUser, question } = this.props
    const UserID = authedUser.authedUser

    dispatch(handleAnswerQuestion({
      authedUser: UserID,
      qid: question.id,
      answer: chosenOption,
    }))

    this.setState(() => ({
      toHome: chosenOption ? true : false,
      chosenOption: '',
    }))
    //this.props.history.push(`/poll/${question.id}`)
  }


  render() {

    const { question } = this.props
    const { chosenOption, toHome } = this.state

    if (toHome === true) {
      return <Redirect to={`/poll/${question.id}`} />
    }

    if (question === null) {
      return <p>This Question doesn't exist.</p>
    }


    const isEnabled = chosenOption.length > 0

    const { name, avatar, optionOneText, optionTwoText } = question

    return (
      <div className="question-container">
        <div className="question-header">{`${name} asks:`}</div>
        <div className="question-body">
          <img src={avatar} alt={''} className="avatar" />
          <img src={graypixel} alt={''} className="vertical-bar" />
          <div className="question-right">
            <div className="option-header">Would you rather</div>
            <div className="line-height"></div>
            <form onSubmit={this.handleSubmit}>
              <span className="option-text">
                <div className="radio">
                  <label htmlFor="option-one">
                    <input
                      id="option-one"
                      type="radio"
                      value="optionOne"
                      name="option-radios"
                      className="bottom-margin"
                      onChange={this.handleChange}
                    />
                    <span className="option-text-poll">{`... ${optionOneText} ?`}</span>
                  </label>
                </div>
                <div className="radio">
                  <label htmlFor="option-two">
                    <input
                      id="option-two"
                      type="radio"
                      value="optionTwo"
                      name="option-radios"
                      className="bottom-margin"
                      onChange={this.handleChange}
                    />
                  <span className="option-text-poll">{`... ${optionTwoText} ?`}</span>
                  </label>
                </div>
                <p />
                <p />
              </span>
              <div className="question-right">
                <button disabled={!isEnabled} className="question semi-square">Submit</button>
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
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
  }
}
export default withRouter(connect(mapStateToProps)(AskQuestion))
