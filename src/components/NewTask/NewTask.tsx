import React from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

interface NewTaskProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export const NewTask = ({}: NewTaskProps) => {
  return(
    <form className={styles['form-new-task']} action="">
      <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
      <button className={styles['create-button']} type="submit">Criar <PlusCircle /></button>
    </form>
  )
}