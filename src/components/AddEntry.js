import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../actions'

export const AddEntry = (props) => {
  const [name, setName] = useState('')

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
          props.addEntry(name)
          setName('')
        }}
      > + </button>
    </div>
  )
}

export default connect(null, { addEntry })(AddEntry)