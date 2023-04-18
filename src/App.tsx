import { useState } from "react"
import { Header } from "./components/Header/Header"

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <section className="wrapper">
      <Header />
    </section>
  )
}