export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addUserAnswer ({ authedUser, qid, answer }) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function handleAddUserAnswer(info) {
  return (dispatch) => {
    dispatch(addUserAnswer(info))
  }
}

export function addUserQuestion ({ authedUser, qid }) {
  // console.log('addUserQuestion', authedUser, qid)
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    qid,
  }
}

export function handleAddUserQuestion(info) console.log('info: ', info)
  return (dispatch) => {
    dispatch(addUserQuestion(info))
  }
}
