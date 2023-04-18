import { Todo } from "../../App"

import Clipboard from "../../assets/clipboard.svg"
import { TodoItem } from "../TodoItem"

import styles from "./TodoList.module.css"

interface TodoListProps {
  todos: Todo[]
  amountToDoCreated: number
  amountTodoFinished: number
}

export const TodoList = ({todos, amountToDoCreated, amountTodoFinished}: TodoListProps) => {
  return(
    <section className={styles.todolist}>
      <div className={styles.tasksInfo}>
        <p>Tarefas criadas <span>{amountToDoCreated}</span></p>
        <p>Concluídas <span>{amountTodoFinished} de {amountToDoCreated}</span></p>
      </div>

      {
        !todos.length && (
          <div className={styles.emptyTaskList}>
            <img src={Clipboard} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )
      }

      {
        todos && todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))
      }
    </section>
  )
}