import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

import StatusSelector from './StatusSelector'

const AddItem = (props) => {
  const [ text, setText ] = useState('')

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
          props.addItem(props.index, '•', text)
          setText('')
        }}
      >+</button>
    </div>
  )
}



export default connect(null, { addItem })(AddItem)