import { ADD_ENTRY, ADD_ITEM, CHANGE_STATUS, CHANGE_TEXT } from '../actions'

// A list of lists of items

const defaultState = () => {
  return [[]]
}

const makeItem = (text, status = '•') => {
  return {
    text, 
    status
  }
}

const itemsReducer = (state = defaultState(), action) => {
  const { type, payload } = action
  switch(type) {
    case ADD_ENTRY: 
      const carryOverItems = state.filter(item => item.status === '>')
      return [...state, carryOverItems]

    case ADD_ITEM: 
      const newState = [...state]
      newState[payload.index] = [ ...newState[payload.index], makeItem(payload.text) ]
      return newState
    
    case CHANGE_STATUS: 
      console.log(state)
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
      console.log(state)
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