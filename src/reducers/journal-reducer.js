import { ADD_ENTRY, SELECT_ENTRY, ADD_ITEM } from '../actions'
import { stat } from 'fs'

// Make a Default Item
const makeItem = (text, status = '•') => {
  return {
    text, 
    status
  }
}

const makeEntry = (name, sourceList = []) => {
  const list = sourceList.filter(item => item.status === '>').map((item) => {
    return makeItem(item.text)
  })
  return {
    name, 
    dateCreated: new Date(),
    list
  }
}

const defaultState = () => {
  return {
    currentEntry: 0,
    entries: [makeEntry('default list')]
  }
}

const journalReducer = (state = defaultState(), action) => {
  const { type, payload } = action
  const newState = {...state}

  switch(type) {
    case ADD_ENTRY:
      const list = state.entries[state.currentEntry].list
      newState.entries = [ ...newState.entries, makeEntry(payload.name, list) ]
      return newState
    
    case SELECT_ENTRY:
      return { ...state, currentEntry: payload.index }

    case ADD_ITEM: 
      const { index, status, text } = payload
      const newEntries = [ ...state.entries ]
      const newItem = makeItem(text, status)
      const newList = [ ...newEntries[index].list, newItem ]
      newEntries[index].list = newList
      const ns = { ...state, entries: newEntries }
      return ns
    
    default:
      return state
  }
}

export default journalReducer