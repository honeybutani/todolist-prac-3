import React from 'react'
import ToDo from './ToDo';

export default function ToDoList({toDoList , handleToggle}) {
   /*pass data to todo one by one using map method  */
  return (
    <div className="todolist">
      {toDoList.map(todo => {
               return (
                   <ToDo  key = {todo.id} todo={todo} handleToggle= {handleToggle} />
               )
           })}
    </div>
  )
}
