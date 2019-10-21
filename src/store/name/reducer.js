import * as contants from './actionTypes'
import { fromJS } from 'immutable'

// immutable对象 api获取的数据(对象类型)也用fromJS()包裹后存入store
const initialState = fromJS({
  cn: 'yewq',
  list: []
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
