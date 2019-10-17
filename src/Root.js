import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

const Root = ({ children, initalState = {} }) => (
  <Provider store={store(initalState)}>{children}</Provider>
)

export default Root
