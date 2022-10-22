import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { ToDo } from './model';

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>('')
  const [list, setList] = useState<ToDo[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (toDo) {
      setList([...list, { id: Date.now(), toDo, isDone: false }])
      setToDo('')
    }
  }

  return (
    <div className="App">
      <span className="Heading">Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleSubmit={handleSubmit} />
      <ToDoList list={list} setList={setList} />
    </div>
  );
}

export default App;
