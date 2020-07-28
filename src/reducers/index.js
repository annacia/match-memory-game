import { combineReducers } from 'redux'
import cardReducer from './card'
import userReducer from './user'
import playerReducer from './player'

export const Reducers = combineReducers({
  cardReducer,
  userReducer,
  playerReducer
})