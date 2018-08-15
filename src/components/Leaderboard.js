import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import graypixel from '../../public/images/dad7d7-pixel.png'

class Leaderboard extends Component {
  render() {
    const { users } = this.props

    const userIds = Object.keys(users)
    //.sort((a, b) => users[a].name.localeCompare(users[b].name))

    const leaders = []

    console.log('leaders: ', leaders)

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
        <ul className="dashboard-list">
          {leaders
            .sort(
              (a, b) =>
                b.answeredQuestions +
                b.createdQuestions -
                (a.answeredQuestions + a.createdQuestions),
            )
            .map(leader => (
              <li key={leader.username}>
                <div>{leader.username}</div>
                <div>{leader.realname}</div>
                <div>{leader.imageURL}</div>
                <div>{leader.answeredQuestions}</div>
                <div>{leader.createdQuestions}</div>
                <div>{leader.answeredQuestions + leader.createdQuestions}</div>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }, props) {
  return {
    users: users,
  }
}

export default connect(mapStateToProps)(Leaderboard)
