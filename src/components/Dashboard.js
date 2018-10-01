import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Question from './Question'
import graypixel from '../images/dad7d7-pixel.png'

class Dashboard extends Component {
  state = {
    showAnswered: false,
  }

  handleButton = e => {
    e.preventDefault()

    const { showAnswered } = this.state
    this.setState(() => ({
      showAnswered: showAnswered ? false : true
    }))
  }


  render() {

    const { unansweredQuestionIds, answeredQuestionIds, userID } =  this.props

    if (!userID) {
      return <Redirect to="/signin" />
    }

    return (
      <div>
        <div className="center">
          <button
            id="button1"
            className={ this.state.showAnswered === false ? 'dashboard-button-active' : 'dashboard-button'}
            onClick={this.handleButton}>
            Unanswered Questions
          </button>
          <img src={graypixel} alt={''} className="vertical-bar-button" />
          <button
            id="button2"
            className={ this.state.showAnswered === true ? 'dashboard-button-active' : 'dashboard-button'}
            onClick={this.handleButton}>
            Answered<br/>Questions
          </button>
        </div>
        <ul className="dashboard-list">
          { this.state.showAnswered === true ?
            (
              answeredQuestionIds.map(id => (
              <li key={id}>
                <Question id={id} showAnswered={this.state.showAnswered}/>
              </li>
            ))
            ) : (
              unansweredQuestionIds.map(id => (
              <li key={id}>
                <Question id={id} showAnswered={this.state.showAnswered}/>
              </li>
            ))
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser }) {

  let userID = authedUser.authedUser
  //console.log('userID', userID)
  //console.log('questions: ', questions)

  return {
    unansweredQuestionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      .filter((q) => questions[q].optionTwo.votes.includes(userID) === false && questions[q].optionOne.votes.includes(userID) === false),
    answeredQuestionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      .filter((q) => questions[q].optionTwo.votes.includes(userID) === true || questions[q].optionOne.votes.includes(userID) === true),
    userID: userID,
  }
}

export default connect(mapStateToProps)(Dashboard)
