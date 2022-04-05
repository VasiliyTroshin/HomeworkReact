import React from 'react'
import './App.scss'

const Message = (props) => {
  return (
  <div className='txt'>
  {props.text}
  </div>)
}

export default Message
