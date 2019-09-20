import { SELECT_ENTRY } from '../actions'

const defaultState = () => {
  return {
    currentEntry: 0
  }
}

const journalReducer = (state = defaultState(), action) => {
  const { type, payload } = action
  
  switch(type) {
    case SELECT_ENTRY:
      return { ...state, currentEntry: payload.index }

    default:
      return state
  }
}

export default journalReducer

