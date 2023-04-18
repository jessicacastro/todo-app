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

  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <>
      <Header />
      <section className={styles.wrapper}>
        <NewTask />
        <TodoList todos={todos} amountToDoCreated={todos.length} amountTodoFinished={completedTodos.length} />
      </section>
    </>
  )
}