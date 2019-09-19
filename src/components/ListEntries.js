import React from 'react'
import { connect } from 'react-redux'
import { selectEntry } from '../actions'

export const ListEntries = (props) => {
  const { journal } = props
  const journalList = journal.map((item, index) => {
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
      {journalList}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    journal: state.journal.entries
  }
}

export default connect(mapStateToProps, { selectEntry })(ListEntries)