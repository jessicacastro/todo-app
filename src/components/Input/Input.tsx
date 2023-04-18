import React from 'react'

import './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export const Input = ({}: InputProps) => {
  return <h1>Input Works!</h1>
}