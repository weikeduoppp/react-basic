import { compose, createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'

const middleware = [thunk]

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
// redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default initState => {
  // 本地State
  // initialState =
  //   JSON.parse(window.localStorage.getItem('state')) || initialState
  const store = createStore(
    rootReducers,
    initState,
    composeEnhancers(applyMiddleware(...middleware))
  )

  // 更新本地
  // store.subscribe(() => {
  //   const state = store.getState()
  //   const persist = {
  //     cart: state.cart,
  //     total: state.total
  //   }
  //   window.localStorage.setItem('state', JSON.stringify(persist))
  // })
  return store
}
