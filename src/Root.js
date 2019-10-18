import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { fromJS } from 'immutable';

const Root = ({ children, initalState = fromJS({}) }) => (
  <Provider store={store(initalState)}>{children}</Provider>
)

export default Root
