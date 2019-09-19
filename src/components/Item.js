import React, { useState } from 'react'
import StatusSelector from './StatusSelector'
import ItemInput from './ItemInput'

const Item = (props) => {
  const [status, setStatus] = useState(props.status)

  return (
    <div>
      <StatusSelector 
        status={props.status} 
        changeStatus={(status) => {
          console.log(status)
        }} />
        <ItemInput 
          text={props.text} 
          onChange={(text) => {
            console.log(text)
          }}
        />
    </div>
  )
}

export default Item