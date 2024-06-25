
import './App.css';
import Header from './Components/Header';
import { From } from './Components/From';
import { useEffect, useState } from 'react';
import Todolist from './Components/Todolist';


function App() {
  const inite=JSON.parse(localStorage.getItem("todos")) || [];
  const [value,setValue]=useState("");
  const [todos,setTodo]=useState(inite);
  const [editTodo,setEdit]=useState(null);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  return (
    <>   
     <div className='container'>
      <div className='app-wrapp'>
        <div>
        <Header/>
        <From value={value} setValue={setValue} todos={todos} setTodo={setTodo} editTodo={editTodo} setEdit={setEdit}/>
        
        </div>
        <div>
        <Todolist todos={todos} setTodo={setTodo}  setEdit={setEdit}/>
        </div>
      </div>
    </div>
    </>

  );
}

export default App;
