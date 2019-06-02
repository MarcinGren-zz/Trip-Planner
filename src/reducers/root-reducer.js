import { combineReducers } from 'redux'
import expenses from './expenses'
import places from './places'

const rootReducer = combineReducers({
  expenses,
  places
})

export default rootReducer