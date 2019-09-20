import React, { useState } from 'react'
import { STATUS_COMPLETE, STATUS_DEFAULT, STATUS_EVENT, STATUS_INCOMPLETE, STATUS_NOTE, STATUS_SAVE } from '../status-types'

const StatusSelector = (props) => {
  const [status, setStatus] = useState(props.status || '•')
  return (
    <select 
        value={status}
        onChange={(e) => {
          setStatus(e.target.value)
          props.changeStatus(e.target.value)
        }}
      >
        <option>{STATUS_DEFAULT}</option>
        <option>{STATUS_COMPLETE}</option>
        <option>{STATUS_INCOMPLETE}</option>
        <option>{STATUS_SAVE}</option>
        <option>{STATUS_NOTE}</option>
        <option>{STATUS_EVENT}</option>
      </select>
  )
}

export default StatusSelector