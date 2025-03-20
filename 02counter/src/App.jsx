import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  

  let [counter,setCounter] = useState(15)

  const addValue = () =>{
  
    if(counter<20)
     console.log(setCounter(counter+1));
    else{
      console.log(setCounter(counter),"not more then 20");
     }
    }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>hello</h1>
      <h2>Counter value : {counter}</h2>


      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove Value {counter}</button>

      <footer>footer:{counter}</footer>

     <h1>{counter}</h1>
    </>
  )
}

export default App