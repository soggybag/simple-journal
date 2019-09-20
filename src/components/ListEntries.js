import React from 'react'
import { connect } from 'react-redux'
import { selectEntry } from '../actions'

export const ListEntries = (props) => {
  const entries = props.entries.map((item, index) => {
    return (
      <button
        key={`${item.name}-${index}`}
        onClick={() => {
          props.selectEntry(index)
        }}
      >{item.name}</button>
    )
  })
  return (
    <div>
      <h1>Entries</h1>
      {entries}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    currentEntry: state.journal.currentEntry
  }
}

export default connect(mapStateToProps, { selectEntry })(ListEntries)