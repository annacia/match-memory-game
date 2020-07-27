import { combineReducers } from 'redux'
import cardReducer from './card'
import userReducer from './user'

export const Reducers = combineReducers({
  cardReducer,
  userReducer
})