import { ADD_ENTRY, ADD_ITEM, CHANGE_STATUS, CHANGE_TEXT } from '../actions'
import { STATUS_DEFAULT, STATUS_INCOMPLETE } from '../status-types'

// A list of lists of items

const defaultState = () => {
  return [[]]
}

const makeItem = (text, status = STATUS_DEFAULT) => {
  return {
    text, 
    status
  }
}

const itemsReducer = (state = defaultState(), action) => {
  const { type, payload } = action

  switch(type) {
    case ADD_ENTRY: 
      const carryOverItems = state[state.length - 1]
        .filter(item => item.status === STATUS_INCOMPLETE)
        .map(item => ({...item}))
        
      return [...state, carryOverItems]

    case ADD_ITEM: 
      const newState = [...state]
      newState[payload.index] = [ ...newState[payload.index], makeItem(payload.text) ]
      return newState
    
    case CHANGE_STATUS: 
      return state.map((list, i) => {
        if (i === payload.entryIndex) {
          return list.map((item, j) => {
            if (j === payload.index) {
              return { ...item, status: payload.status }
            }
            return item
          })
        } 
        return list
      })
    
    case CHANGE_TEXT: 
      return state.map((list, i) => {
        if (i === payload.entryIndex) {
          return list.map((item, j) => {
            if (j === payload.index) {
              return { ...item, text: payload.text }
            }
            return item
          })
        } 
        return list
      })

    default: 
      return state
  }
}

export default itemsReducer