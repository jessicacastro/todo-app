import { Todo } from "../../App"

interface TodoListProps {
  todos: Todo[]
  amountToDoCreated: number
  amountTodoFinished: number
}

export const TodoList = ({todos, amountToDoCreated, amountTodoFinished}: TodoListProps) => {
  return <h1>TodoList</h1>
}