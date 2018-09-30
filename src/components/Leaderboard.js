import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Leaderboard extends Component {
  render() {
    const { users } = this.props

    const userIds = Object.keys(users)
    //.sort((a, b) => users[a].name.localeCompare(users[b].name))

    const leaders = []

    userIds.map(id =>
      leaders.push({
        username: id,
        realname: users[id].name,
        imageURL: users[id].avatarURL,
        answeredQuestions: Object.keys(users[id].answers).length,
        createdQuestions: users[id].questions.length,
      }),
    )

    return (
      <div>
        <ul>
          {leaders
            .sort(
              (a, b) =>
                b.answeredQuestions +
                b.createdQuestions -
                (a.answeredQuestions + a.createdQuestions),
            )
            .map((leader, index) => (
                <li key={leader.username}>
                  <div className="leaderboard-body">
                    {index === 0 && <div className="triangle-gold" />}
                    {index === 1 && <div className="triangle-silver" />}
                    {index > 1 && <div className="triangle-bronze" />}
                    <div className="leaderboard-left">
                      <img src={leader.imageURL} alt={''} className="avatar" />
                    </div>
                    <div className="v1" />
                    <div className="leaderboard-middle">
                      <div>
                        <h4>{leader.realname}</h4>
                      </div>
                      <div className="count-row">
                        <div>Answered questions</div>
                        <div>{leader.answeredQuestions}</div>
                      </div>
                      <div className="count-row">
                        <div>Created questions</div>
                        <div>{leader.createdQuestions}</div>
                      </div>
                    </div>
                    <div className="v1" />
                    <div className="leaderboard-right">
                      <div>Score</div>
                      <div className="score-circle">
                        {leader.answeredQuestions + leader.createdQuestions}
                      </div>
                    </div>
                  </div>
                </li>      
            ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: users,
  }
}

export default withRouter(connect(mapStateToProps)(Leaderboard))
