import React from 'react'

import './TodoItem.module.css'

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
}

export const TodoItem = ({ id, title, completed, toggleTodo }: TodoItemProps) => {
  return <h1>TodoItems</h1>
}