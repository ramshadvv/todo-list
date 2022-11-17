import {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  useEffect(() => {
   return()=>{
    console.log('Unmounted');
   }
  }, [toDos]);
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj)=>{
            return(
              <div className="todo">
                <div className="left">
                  <input onChange={(e)=>{
                    console.log(e.target.checked)
                    console.log(obj)
                    setTodos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id){
                        obj.status=e.target.checked
                      }
                      return obj2
                    }))
                    
                    console.log(obj)
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>{
                    setTodos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id){
                        return false
                      }
                      return true
                    }))
                  }} className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }
      </div>
      <div style={{paddingBottom:'3rem'}}>
        <h2 style={{color:'white',marginTop:'2rem'}}>Active Tasks</h2>
          <ul style={{marginTop:'1rem'}}>
            {
              toDos.map((obj)=>{
                if(obj.status){
                  return(
                    <li style={{color:'white',marginLeft:'2rem',padding:'10px'}}>{obj.text}</li>
                  )
                }
                return null
              })
            }
          </ul>
      </div>
    </div>
  );
}

export default App;