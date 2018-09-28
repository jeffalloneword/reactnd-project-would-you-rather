import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { handleAddUserQuestion } from '../actions/users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerQuestion({ authedUser, qid, answer }) {
  //console.log('3answerQuestion: ', authedUser, qid, answer)
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  }
}

export function handleAnswerQuestion(info) {
  return dispatch => {
    dispatch(answerQuestion(info))

    return saveQuestionAnswer(info)
  }
}


export function saveNewQuestion(question) {
  return {
    type: SAVE_NEW_QUESTION,
    question,
  }
}

export function handleSaveNewQuestion({ optionOneText, optionTwoText, authedUser }) {
  let newquestion = null
  return dispatch => {
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })

    .then((question) => newquestion = question)
    .then((newquestion) => dispatch(saveNewQuestion(newquestion)))
    .then(() => dispatch(handleAddUserQuestion({
      authedUser,
      qid: newquestion.id,
    })))
  }
}
