import React from 'react'
import './Input.css'

const Input = (props) => {

  return (
    <>
      <i className="fas fa-search search-icon"></i>
      <input className="custom-input" {...props}/>
    </>
  )
}

export default Input;