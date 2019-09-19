import React from 'react'
import { connect } from 'react-redux'
import AddItem from './AddItem'
import ListItems from './ListItems'

export const ShowEntry = (props) => {
  return (
    <div>
      <h1>Show Entry</h1>
      <h2>{props.entry.name}</h2>
      <ListItems />
      <AddItem index={props.currentEntry} />
      <div>
        <button>New Entry</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { journal } = state
  return {
    currentEntry: journal.currentEntry,
    entry: journal.entries[journal.currentEntry]
  }
}

export default connect(mapStateToProps)(ShowEntry)