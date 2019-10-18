import { combineReducers } from 'redux'
import nameReducer from './name/reducer'

const reducers = combineReducers({
  name: nameReducer
})

export default reducers
