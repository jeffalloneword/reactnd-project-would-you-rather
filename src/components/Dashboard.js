import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import graypixel from '../images/dad7d7-pixel.png'

class Dashboard extends Component {
  render() {

    const { unansweredQuestionIds, answeredQuestionIds } =  this.props
    console.log('un, ans: ', unansweredQuestionIds, answeredQuestionIds)

    return (
      <div>
        <div className="center">
          <button className="dashboard-button">Unanswered Questions</button>
          <img src={graypixel} alt={''} className="vertical-bar-button" />
          <button className="dashboard-button">Answered Questions</button>
        </div>
        <ul className="dashboard-list">
          {unansweredQuestionIds.map(id => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
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
