import * as contants from './actionTypes'
import { fromJS } from 'immutable'

// immutable对象
const initialState = fromJS({
  cn: 'yewq'
})

export default (state = initialState, action) => {
  switch (action.type) {
    case contants.DEFAULT:
      // 嵌套的话 setIn(['cn', '..']) 修改多个值merge({...})  根据原有值更新 updateIn
      return state.set('cn', action.payload)
    default:
      return state
  }
}
