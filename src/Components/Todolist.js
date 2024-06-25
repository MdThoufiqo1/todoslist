import React from 'react'
import "../App.css"

const Todolist = ({todos,setTodo,setEdit}) => {
   const handleEdit=({id})=>{
      const findtodo=todos.find((todo)=>todo.id === id);
      setEdit(findtodo);
    
   }

  const handlecom=(todo)=>{
    setTodo(
      todos.map((item)=>{
        if(item.id === todo.id){
          return {...item,completed: !item.completed }; 
        }
        return item;
  })
    )
  }
  const handleDele=({id})=>{
   setTodo(todos.filter((todo)=>todo.id !== id));
   
  };
  return (
    <>
    <div>
    {
        todos.map((todo)=>(
          <div className='d-flex flex-row justify-content-center'>
           <li className='list-item' key={todo.id}>
            <h1  className='list' id={todo.completed ? 'list-card':''}>{todo.title}</h1> 
            <button className='button-complete task-button' onClick={()=>handlecom(todo)}>
            <i className="fa fa-check-circle"></i>
            </button>
            <button className='button-edit task-button' onClick={()=>handleEdit(todo)}>
            <i className="fa fa-edit"></i>
            </button>
            <button className='button-delete task-button' onClick={()=>handleDele(todo)}>
            <i className="fa fa-trash"></i>
            </button>
           </li>
           </div>
        )
        )
    }
    </div>
    </>
  )
}

export default Todolist