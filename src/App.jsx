import { useState } from 'react'



export default function App() {
  const [title, setTitle] = useState('');

   const localTodos = localStorage.getItem('todos') 

  const [todos, setTodos] = useState(JSON.parse(localTodos) ||[] )
  
 

  const addTodo = () => {
    console.log( title);

    const newTodo = {title, completed:false};
    const updatedTodos = [...todos, newTodo];
    setTodos (updatedTodos);
    setTitle('');

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    
  };
const markDone = (todoItem) => {
  console.log(todoItem);

  const updatedTodos = todos.map((todoElement) => {
    if (todoElement.title === todoItem.title) {
      return {title:todoElement.title, completed: true};
    }
    return todoElement;
  })

  setTodos(updatedTodos)
   localStorage.setItem('todos', JSON.stringify(updatedTodos))

}

  
  return (
    <div className='main-wrapper'>
      <h1 className='title'>DayMate
      </h1>

      <div className="todos">

        <div className="create-todo">
         
          <input value={title} onChange={(e)=>setTitle(e.target.value)}type="text" placeholder="Enter Daymate Title" />
          <button onClick={addTodo}>Add Now</button>
          

          <button onClick={()=>{
            localStorage.clear()
            setTodos([])
           } }>Clear Todos</button>

          
          
        </div>

       {todos?.map((todo)=>(
        <div key={todo.title} className="todo-item"> 
        <h2 style={{textDecoration:todo.completed ?'line-through':'' }}>{todo.title}</h2>
        <button onClick={()=>markDone(todo)} className="todo-btn">{todo.completed ?'Completed':'Mark Done'}</button>
        </div>
       ))}


          


      </div>
    </div>
  )
} 