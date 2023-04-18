import { useState } from "react"
import { Header } from "./components/Header/Header"
import { NewTask } from "./components/NewTask"

import styles from './App.module.css'
import { TodoList } from "./components/TodoList"

export interface Todo {
  id: number
  title: string
  completed: boolean
}

interface createTodo {
  title: string
  callback: () => void
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Fazer café',
      completed: false
    },
    {
      id: 2,
      title: 'Estudar React',
      completed: true
    }
])

const createTodo = (title: string) => {
  const newTodo = {
    id: todos.length + 1,
    title: title,
    completed: false
  }

  setTodos([...todos, newTodo])
}

const toggleTodo = (id: number) => {
  const newTodos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  setTodos(newTodos)
}

const deleteTodo = (id: number) => {
  const newTodos = todos.filter(todo => todo.id !== id)
  setTodos(newTodos)
}

  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <NewTask onCreateNewTask={createTodo} />
        <TodoList 
          todos={todos} 
          amountToDoCreated={todos.length} 
          amountTodoFinished={completedTodos.length} 
          onToggleTodo={toggleTodo} 
          onDeleteTodo={deleteTodo} />
      </section>
    </>
  )
}