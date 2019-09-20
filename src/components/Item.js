import React, { useState } from 'react'
import StatusSelector from './StatusSelector'
import ItemInput from './ItemInput'
import { connect } from 'react-redux'
import { changeStatus, changeText } from '../actions'

const Item = (props) => {
  const [status, setStatus] = useState(props.status)
  const [text, setText] = useState(props.text)

  return (
    <div>

      <StatusSelector 
        status={props.status} 
        changeStatus={(status) => {
          props.changeStatus(props.entryIndex, props.index, status)
        }} />

      <input
        placeholder="enter some text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        onBlur={() => {
          props.changeText(props.entryIndex, props.index, text)
        }} 
      />

    </div>
  )
}

export default connect(null, { changeStatus, changeText })(Item)