import { DEFAULT } from './actionTypes'
import { makeActionCreator } from '../util'
import axios from 'axios'

export const setName = makeActionCreator(DEFAULT, 'payload')

export const fetchName = name => dispatch => {
  return axios
    .get('/api/name')
    .then(res => {
      dispatch(setName(name))
    })
    .catch(e => {
      console.log('/api/name, fail')
    })
}
