import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerQuestion({ authedUser, qid, answer }) {
  console.log('3answerQuestion: ', authedUser, qid, answer)
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  }
}

export function handleAnswerQuestion(info) {
  console.log('2handleAQ: ', info)
  return dispatch => {
    dispatch(answerQuestion(info))

    return saveQuestionAnswer(info)

  }


}
