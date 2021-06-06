import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'

const ListItems = (props) => {
  const currentEntry = useSelector(state => state.journal.currentEntry)
  const items = useSelector(state => state.items[state.journal.currentEntry])

  const itemsList = items.map((item, index) => {
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
      {itemsList}
    </div>
  )
}

export default ListItems