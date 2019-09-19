import { combineReducers } from 'redux'

import journalReducer from './journal-reducer'

export default combineReducers({
  journal: journalReducer
})