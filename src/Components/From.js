import { useEffect } from 'react';
import React from 'react'
import {v4 as uuidV4} from "uuid";

export const From = ({value,setValue,todos,setTodo,editTodo,setEdit}) => {
   const updatetodo=(title,id,completed)=>{
     const newtodo=todos.map((todo)=>
      todo.id === id ? {id,title,completed} : todo
     ) 
      setTodo(newtodo);
      setEdit('');
   } 
   useEffect(()=>{
    if (editTodo){
       setValue(editTodo.title)
    }
    else{
      setValue("");
    }
   },[setValue,editTodo])
  const handle=(e)=>{
    e.preventDefault();
    if (!editTodo){
      setTodo([...todos,{id:uuidV4(),title:value,completed:false}]);
     setValue("")
    }else{
      updatetodo(value,editTodo.id,editTodo.completed)
    }  
      }

  return (
    <>
    <form className="form-inline my-2 my-lg-0 d-flex justify-content-center" onSubmit={handle}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
       value={value} required onChange={(e)=>setValue(e.target.value)}/>
      <button className="btn btn-success my-2 my-sm-0" type="submit">{editTodo ? "OK":"Add"}</button>
    </form>
    </>
  )
}
