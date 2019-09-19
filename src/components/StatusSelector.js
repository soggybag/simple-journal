import React, { useState } from 'react'

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
        <option>{'•'}</option>
        <option>{'X'}</option>
        <option>{'>'}</option>
        <option>{'<'}</option>
        <option>{'-'}</option>
      </select>
  )
}

export default StatusSelector