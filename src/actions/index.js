export const ADD_ITEM = 'ADD_ITEM'
export const SET_STATUS = 'SET_STATUS'
export const ADD_ENTRY = 'ADD_ENTRY'
export const SELECT_ENTRY = 'SELECT_ENTRY'

export const addEntry = (name) => {
  return {
    type: ADD_ENTRY,
    payload: { name }
  }
}

export const addItem = (index, status, text) => {
  return {
    type: ADD_ITEM,
    payload: { index, status, text }
  }
}

export const setStatus = (index, status) => {
  return {
    type: SET_STATUS
  }
}

export const selectEntry = (index) => {
  return {
    type: SELECT_ENTRY,
    payload: { index }
  }
}