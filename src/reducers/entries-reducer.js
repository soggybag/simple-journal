import { ADD_ENTRY } from '../actions'

// State is a list of Objects

const defaultState = () => {
  return [
    { name: 'default', date: new Date() }
  ]
}

const entriesReducer = (state = defaultState(), action) => {
  const { type, payload } = action

  switch(type) {
    case ADD_ENTRY: 
      return [...state, { name: payload.name, date: new Date() }]

    default: 
      return state
  }
}

export default entriesReducer