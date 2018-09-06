import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import graypixel from '../images/dad7d7-pixel.png'

class Dashboard extends Component {
  state = {
    showAnswered: false,
    activeButton: false,
  }

  handleButton = e => {
    e.preventDefault()

    const { showAnswered } = this.state

    this.setState(() => ({
      showAnswered: showAnswered ? false : true,
    }))
    //console.log('lastID: ', id)
  }


  render() {

    const { unansweredQuestionIds, answeredQuestionIds } =  this.props
    console.log('un, ans: ', unansweredQuestionIds, answeredQuestionIds)

    return (
      <div>
        <div className="center">
          <button
            id="button1"
            className={ this.state.activeButton === true ? 'dashboard-button-active' : 'dashboard-button'}
            onClick={this.handleButton}>
            Unanswered Questions
          </button>
          <img src={graypixel} alt={''} className="vertical-bar-button" />
          <button
            id="button2"
            className={ this.state.activeButton === true ? 'dashboard-button-active' : 'dashboard-button'}
            onClick={this.handleButton}>
            Answered Questions
          </button>
        </div>
        <ul className="dashboard-list">
          { this.state.showAnswered === true ?
            (
              answeredQuestionIds.map(id => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))
            ) : (
              unansweredQuestionIds.map(id => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions }, props) {
  return {
    unansweredQuestionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      .filter((q) => questions[q].optionTwo.votes.length === 0 && questions[q].optionOne.votes.length === 0),
    answeredQuestionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
      .filter((q) => questions[q].optionTwo.votes.length > 0 || questions[q].optionOne.votes.length > 0),
  }
}

export default connect(mapStateToProps)(Dashboard)
