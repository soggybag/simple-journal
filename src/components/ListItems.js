import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'

const ListItems = (props) => {
  const items = props.items.map((item, index) => {
    return (
      <Item
        key={`item-${index}`}
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
  const { currentEntry, entries } = state.journal
  return {
    items: entries[currentEntry].list
  }
}

export default connect(mapStateToProps)(ListItems)