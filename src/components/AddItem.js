import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../actions'

const AddItem = (props) => {
  const [ text, setText ] = useState('')
  const dispatch = useDispatch()

  return (
    <div>

      <input 
        type="text"
        placeholder="Enter Item"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />

      <button
        onClick={() => {
          dispatch(addItem(props.entryIndex, text))
          setText('')
        }}
      >+</button>
    </div>
  )
}



export default AddItem