import React from 'react'
import { connect } from 'react-redux'
import AddItem from './AddItem'
import ListItems from './ListItems'
import { addEntry } from '../actions'

export const ShowEntry = (props) => {
  return (
    <div>
      <h1>Show Entry</h1>
      <h2>{props.entry.name}</h2>
      <ListItems />
      <AddItem entryIndex={props.currentEntry} />
      <div>
        <button
          onClick={() => {
            props.addEntry(null, props.entriesLength)
          }}
        >New Entry</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { journal, entries } = state

  return {
    entriesLength: entries.length,
    currentEntry: journal.currentEntry,
    entry: entries[journal.currentEntry]
  }
}

export default connect(mapStateToProps, { addEntry })(ShowEntry)