import { combineReducers } from 'redux-immutable'
import nameReducer from './name/reducer'

const reducers = combineReducers({
  user: nameReducer
})

export default reducers
