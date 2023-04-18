import React from 'react'
import { Trash } from "phosphor-react"

import styles from './TodoItem.module.css'

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

export const TodoItem = ({ id, title, completed, onToggleTodo, onDeleteTodo }: TodoItemProps) => {
  const isCompletedCheckbox = completed ? styles.completed : styles.checkbox
  const isCompletedTask = completed ? styles.completedTask : styles.task

  const handleCheckChange = () => onToggleTodo(id)

  const handleDeleteTodo = () => onDeleteTodo(id)

  return(
    <div className={isCompletedTask} key={id}>
      <input 
        className={isCompletedCheckbox}
        type='checkbox'
        checked={completed}
        onChange={handleCheckChange}  />
      <p>{title}</p>
      <Trash size={24} onClick={handleDeleteTodo}/>
    </div>
  )
}