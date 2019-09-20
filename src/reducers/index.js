import { combineReducers } from 'redux'

import journalReducer from './journal-reducer'
import entriesReducer from './entries-reducer'
import itemsReducer from './items-reducer'

export default combineReducers({
  journal: journalReducer, 
  entries: entriesReducer,
  items: itemsReducer
})