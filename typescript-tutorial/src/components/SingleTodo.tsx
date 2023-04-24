import { type } from 'os'
import React from 'react'
import { Todo } from '../model'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import { MdDone } from 'react-icons/md'


type Props={
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => { 

  const handleDone = (id: number) => {
    /*
    finds the note based on current note id, once it finds it on an array
    it copies the whole todo property todo, sets the todo to the oppposte boolean
    */
    setTodos(
      todos.map((todo)=>
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo
      )
    )
  };

  const handleDelete = (id:number) => {
    setTodos(todos.filter((todo)=> todo.id !== id)); //if an id isn't equal to the current one get rid of it
  }

  
  return (
    <form className='todos__single'>
      { todo.isDone ? (
         <s className='todos__single--text'>{todo.todo}</s>
      ) :

      (<span className='todos__single--text'>{todo.todo}</span>)

      }
      <span className='todos__single--text'>
        {todo.todo}
      </span>

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={()=>{ handleDelete(todo.id)}}>
          <AiFillDelete/>
        </span>
        <span className="icon" onClick={()=> handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo