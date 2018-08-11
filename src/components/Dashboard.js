import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { NavLink } from 'react-router-dom'
import graypixel from '../../public/images/dad7d7-pixel.png'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <button className="dashboard-button">Unanswered Questions</button>
          <img src={graypixel} alt={''} className="vertical-bar-button" />
          <button className="dashboard-button">Answered Questions</button>
        </div>
        <ul className="dashboard-list">
          {this.props.questionIds.map(id => (
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
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp,
    ),
  }
}

export default connect(mapStateToProps)(Dashboard)
