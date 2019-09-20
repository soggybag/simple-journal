import { ADD_ENTRY } from '../actions'

// State is a list of Objects

const defaultState = (name = 'Entry 1') => {
  return [
    { name, date: new Date() }
  ]
}

const entriesReducer = (state = defaultState(), action) => {
  const { type, payload } = action

  switch(type) {
    case ADD_ENTRY: 
      const name = `Entry ${state.length + 1}`
      return [...state, { name, date: new Date() }]

    default: 
      return state
  }
}

export default entriesReducer