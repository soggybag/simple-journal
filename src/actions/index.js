export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const ADD_ENTRY = 'ADD_ENTRY'
export const SELECT_ENTRY = 'SELECT_ENTRY'

export const addEntry = (name, length) => {
  return {
    type: ADD_ENTRY,
    payload: { name, length }
  }
}

export const addItem = (index, text) => {
  return {
    type: ADD_ITEM,
    payload: { index, text }
  }
}

export const changeStatus = (entryIndex, index, status) => {
  return {
    type: CHANGE_STATUS,
    payload: { entryIndex, index, status }
  }
}

export const changeText = (entryIndex, index, text) => {
  return {
    type: CHANGE_TEXT,
    payload: { entryIndex, index, text }
  }
}

export const selectEntry = (index) => {
  return {
    type: SELECT_ENTRY,
    payload: { index }
  }
}