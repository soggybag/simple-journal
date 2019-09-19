import React, { useState } from 'react'

const ItemInput = (props) => {
  const [text, setText] = useState(props.text)
  return (
    <input 
      placeholder="Enter Item"
      value={text}
      onChange={(e) => {
        setText(e.target.value)
        props.onChange(e.target.value)
      }}
    />
  )
}

export default ItemInput