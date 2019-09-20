import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'

const ListItems = (props) => {
  const items = props.items.map((item, index) => {
    return (
      <Item
        key={`item-${index}-${props.currentEntry}`}
        entryIndex={props.currentEntry}
        index={index}
        status={item.status}
        text={item.text}
      />
    )
  })
  return (
    <div>
      {items}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { journal, items } = state

  return {
    currentEntry: journal.currentEntry,
    items: items[journal.currentEntry]
  }
}

export default connect(mapStateToProps)(ListItems)