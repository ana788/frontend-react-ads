import React from 'react'
import "./Button.css"

const Button = ({variant, titulo}) => {
  return (
    <button className={variant}>{titulo}</button>
  )
}

export default Button
