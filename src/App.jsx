// import React from "react";
// import { useState } from "react";

// const { useState } = require("react")


// const App = () ={
// let { num , setNum } = useState (0);
  
// const addCounter = ( )=> {
// setNum (num += 1);
// console.log(num)
// }

//   return (
//     <>
//     <h1>Hello World! {num}</h1>
//     <p>{num}</p>
//     <button onClick={addCounter}>add {num}</button>
//  </>
//   )
// }
// export default App

// import React from "react";
// import { useState , useRef } from "react";
// const App = ( )=> {
// const {todo , setTodo} = useState ([]);
// const todoVal = useRef;

// const addTodo = (event)=>{
//   event.preventDefault() ;
//   todo.push (todoVal.current.value)
//   setTodo([...todo]);
//   console.log(todo);
//   todoVal.current.value
// }

// }



// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   //array destructuring
//   const [num, setNum] = useState(0);

//   const addCounter = ()=>{
//     setNum(num + 1);
//   }

//   const lessCounter = ()=>{
//     setNum(num - 1);
//   }
//   return (
//     <>
//     <h1>Hello world {num}</h1>
//     <h1>{num}</h1>
//     <button onClick={addCounter}>add {num}</button>
//     <button onClick={lessCounter}>less {num}</button>
//     </>
//   )
// }

// export default App



// import { useState , useRef } from "react"

// const App = () => {
//   const [todo , setTodo] = useState([]);
//   const todoVal = useRef()

//   const addTodo = (event)=>{
//     event.preventDefault();
//     todo.push(todoVal.current.value)
//     setTodo([...todo]);
//     console.log(todo);

//     todoVal.current.value = ""
    
//   }

//   const deleteTodo = (index)=>{
//     console.log("todo deleted" , index);
//     todo.splice(index , 1);
//     setTodo([...todo]);
    
//   }
//   const editTodo = (index)=>{
//     console.log("todo edited" , index);
//     const editedVal = prompt("enter value");
//     todo.splice(index , 1 , editedVal);
//     setTodo([...todo]);
    
//   }
//   return (
//     <div className="d-flex justify-content-between flex-wrap p-5 gap-5 m-5">
//     <h1 className="text-center">Todo App</h1>
//     <form onSubmit={addTodo}>
//       <input type="text" placeholder="enter todo" ref={todoVal} />
//       <button className="btn btn-primary" type="submit">click</button>
//     </form>
//     <ul>
//       {todo.map((item , index)=>{
//         return <div key={index}>
//           <li >{item}</li>
//           <button className="btn btn-danger" onClick={()=> deleteTodo(index)}>delete</button>
//           <button className="btn btn-secondary" onClick={()=> editTodo(index) }>edit</button>
//         </div>
//       })}
//     </ul>
    
//     </div>
//   )
// }

// export default App


import { useState, useRef } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    if (todoVal.current.value.trim()) {
      setTodo([...todo, todoVal.current.value.trim()]);
      todoVal.current.value = "";
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todo.filter((_, i) => i !== index);
    setTodo(updatedTodos);
  };

  const editTodo = (index) => {
    const editedVal = prompt("Enter the new value:", todo[index]);
    if (editedVal && editedVal.trim()) {
      const updatedTodos = todo.map((item, i) => (i === index ? editedVal.trim() : item));
      setTodo(updatedTodos);
    }
  };

  return (
    <div className="container gap-5 mt-5">
      <h1 className="text-center mb-4">Todo App</h1>
      <form onSubmit={addTodo} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="Enter todo"
          ref={todoVal}
          className="form-control me-2"
        />
        <button className="btn btn-primary" type="submit">
          Add Todo
        </button>
      </form>
      <ul className="list-group">
        {todo.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <div>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => editTodo(index)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

