export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function handleSetAuthedUser(text) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return userID({
      text,
    })
      .then(tweet => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
  }
}
