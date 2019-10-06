import React, { useState } from 'react'
import StatusSelector from './StatusSelector'
import { connect } from 'react-redux'
import { changeStatus, changeText, removeItem } from '../actions'

const Item = (props) => {
  // const [status, setStatus] = useState(props.status)
  const [text, setText] = useState(props.text)
  const blurHandler = () => {
    if (text === "") {
      props.removeItem(props.entryIndex, props.index);
    } else {
      props.changeText(props.entryIndex, props.index, text)
    }
  }
  const removeHandler = () => {
    props.removeItem(props.entryIndex, props.index);
  }
  const submitHandler = (e) => {
    // Prevents the default webpage handling of form submit (which includes a refresh)
    e.preventDefault();
    if (text === "") {
      props.removeItem(props.entryIndex, props.index);
    } else {
      props.changeText(props.entryIndex, props.index, text);
    }
  }
  return (
    <div>

      <StatusSelector 
        status={props.status} 
        changeStatus={(status) => {
          props.changeStatus(props.entryIndex, props.index, status)
        }} />

        <form onSubmit={submitHandler} style={{ display: "inline-block" }}>
          <input
            placeholder="enter some text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            onBlur={blurHandler}
          />
        </form>

      <button type="button" onClick={removeHandler}> x </button>

    </div>
  )
}

export default connect(null, { changeStatus, changeText, removeItem })(Item)