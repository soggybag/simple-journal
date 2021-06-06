import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEntry } from '../actions'

export const AddEntry = (props) => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Add Entry</h1>
      <input 
        type="text"
        placeholder="Enter List name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addEntry(name))
          setName('')
        }}
      > + </button>
    </div>
  )
}

export default AddEntry