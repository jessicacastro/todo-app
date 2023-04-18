import React from 'react'
import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css'

interface NewTaskProps extends React.InputHTMLAttributes<HTMLInputElement>{
  onCreateNewTask: (title: string) => void
}

export const NewTask = ({onCreateNewTask}: NewTaskProps) => {
  const [title, setTitle] = React.useState<string>('')

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    onCreateNewTask(title)
    setTitle('')
  }

  const handleNewTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    event.target.setCustomValidity('')
  }

  const handleNewTitleInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    event.preventDefault()
    event.target.setCustomValidity('Digite um título para a tarefa')
  }

  return(
    <form onSubmit={handleCreateTask} className={styles.formNewTask} action="">
      <input 
        onChange={handleNewTitleChange}
        onInvalid={handleNewTitleInvalid}
        value={title}
        className={styles.input} 
        type="text" 
        placeholder="Adicione uma nova tarefa" />
      <button className={styles.createButton} type="submit">Criar <PlusCircle /></button>
    </form>
  )
}