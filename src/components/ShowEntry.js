import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddItem from './AddItem'
import ListItems from './ListItems'
import { addEntry } from '../actions'

export const ShowEntry = (props) => {
  const dispatch = useDispatch()
  const entriesLength = useSelector(state => state.entries.length)
  const currentEntry = useSelector(state => state.journal.currentEntry)
  const entry = useSelector(state => state.entries[state.journal.currentEntry])

  return (
    <div>
      <h1>Show Entry</h1>
      <h2>{entry.name}</h2>
      <ListItems />
      <AddItem entryIndex={currentEntry} />
      <div>
        <button
          onClick={() => {
            dispatch(addEntry(null, entriesLength))
          }}
        >New Entry</button>
      </div>
    </div>
  )
}

export default ShowEntry