import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectEntry } from '../actions'

export const ListEntries = (props) => {
  const dispatch = useDispatch()
  const entries = useSelector(state => state.entries)
  const currentEntry = useSelector(state => state.journal.currentEntry)

  const entrieslist = entries.map((item, index) => {
    return (
      <button
        key={`${item.name}-${index}`}
        onClick={() => {
          dispatch(selectEntry(index))
        }}
      >{item.name}</button>
    )
  })
  return (
    <div>
      <h1>Entries</h1>
      {entrieslist}
    </div>
  )
}

export default ListEntries