const SIMPLE_JOURNAL = "SIMPLE_JOURNAL"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(SIMPLE_JOURNAL)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(SIMPLE_JOURNAL, serializedState)
  } catch(err) {
    console.log("Error saving data")
  }
}