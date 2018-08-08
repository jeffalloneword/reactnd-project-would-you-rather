export function formatQuestion(question, author, authedUser) {
  const { id, likes, replies, optionOne, optionTwo, timestamp } = question
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    optionOneText: optionOne.text,
    optionTwoText: optionTwo.text,
    optionOneVotes: optionOne.votes,
    optionTwoVotes: optionTwo.votes,
    avatar: avatarURL,
  }
}
