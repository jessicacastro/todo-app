import React from 'react'
import { Trash } from "phosphor-react"

import styles from './TodoItem.module.css'

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  toggleTodo?: (id: number) => void;
}

export const TodoItem = ({ id, title, completed, toggleTodo }: TodoItemProps) => {
  const isCompletedCheckbox = completed ? styles.completed : styles.checkbox
  const isCompletedTask = completed ? styles.completedTask : styles.task

  return(
    <div className={isCompletedTask} key={id}>
      <input 
        className={isCompletedCheckbox}
        type='checkbox'
        checked={completed}  />
      <p>{title}</p>
      <Trash size={24}/>
    </div>
  )
}