import React from 'react'


const Input = (props) => {
  return (
     <div>
      <input
        type="text"
        value={props.value}
        onChange = {event => console.log("value changed!")}
      />
    </div>
  )
}

export default Input