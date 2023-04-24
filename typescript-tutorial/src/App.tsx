import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>(""); //keeps track of current note
  const [todos, setTodos] = useState<Todo []>([]); //keeps a collection of single notes
 

  //adds a note once the submit button has been hit
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{ id:Date.now() , todo:todo, isDone:false}]);
      setTodo("");
    }
  };

  console.log(todos);

  //allows user to type and save a note
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
