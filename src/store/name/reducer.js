import * as contants from './actionTypes'

const initialState = 'yewq'

export default (state = initialState, action) => {
  switch (action.type) {
    case contants.DEFAULT:
      return action.payload
    default:
      return state
  }
}
