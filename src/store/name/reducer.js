import { DEFAULT } from './actionTypes'

const initialState = 'yewq'

export default (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT:
      return action.payload
    default:
      return state
  }
}
