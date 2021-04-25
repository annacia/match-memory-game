import { combineReducers } from 'redux'
import cardReducer from './card'
import playerReducer from './player'

export const Reducers = combineReducers({
  cardReducer,
  playerReducer
})