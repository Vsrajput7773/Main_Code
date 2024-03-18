import { useState } from 'react'
import './App.css'

function App() {
      const [input ,setInput]=useState('') 
      const [todo ,setTodo]=useState([]) 

      const handleSubmit =(e)=>{
        e.preventDefault()
        if(input.trim()!==''){
        
        setTodo([...todo,input])
        setInput('')
        }
    }

    const handledelete=(index)=>{
        const newlist=[...todo]
        newlist.splice(index,1)
        setTodo(newlist)
    }

  return (
  <>
    <input type="text" placeholder='Enter Todo' value={input} onChange={(e)=>setInput(e.target.value)} />
    <button id='btn' onClick={handleSubmit}>Submit Todo</button>
    <ul>
      {
        todo.map((d,index)=>(
          <>
          <li key={d.index}>{d}</li>
          <button onClick={()=>handledelete(index)}>Remove</button>
          </>
        ))
      }
    </ul>

  </>
  )
}

export default App
