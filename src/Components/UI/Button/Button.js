import React from 'react'
import './index.css'
const Button = ({role}) => {
  return (
    <button className={role}>{role}</button>
  )
}

export default Button