import { RECEIVE_QUESTIONS, ANSWER_QUESTION, SAVE_NEW_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      //console.log('actiontype: ', action)
      return {
        ...state,
        ...action.questions,
      }
    case ANSWER_QUESTION:
      //console.log('answer-action: ', action, state, action.qid)
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      }
    case SAVE_NEW_QUESTION :
      console.log('save_new_action', action, state )
      return {
        ...state,
        [action.question.id]: action.question,
      }
    default:
      return state
  }
}
