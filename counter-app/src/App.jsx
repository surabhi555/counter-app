
import { useState } from 'react';
import './App.css'

function App() {
  // let counter=15;
  let[counter,setCounter]=useState(10);
  const addValue= ()=>{
      if(counter<=20){
        setCounter(counter+=1);
    console.log("value added",counter)
       
      }
    
  }
  const removeValue=()=>{
    if(counter>0){
      
      setCounter(counter-=1);
      console.log("value removed",counter)
     
    }
    
  }

  return (
    <>
    <h1>Counter App</h1>
   <h2>Counter value:{counter}</h2>
   <button 
   onClick={addValue} disabled={counter>=20}
   >Increment</button> 
   <button
   onClick={removeValue}  disabled={counter<=0}
   >Decrement</button>
   </>
  )
}

export default App
