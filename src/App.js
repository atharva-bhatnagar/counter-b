import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0)


  useEffect(()=>{
    if(counter<0){
      document.title=`Negative -> (${counter})`
    }
    if(counter>0){
      document.title=`Positive -> (${counter})`
    }
    if(counter===0){
      document.title="Counter App"
    }
  },[counter])

  return (
    <div className="App">
      <h2>A Counter Application Using<br/> useState()</h2>
      <div className='counter-container'>
        <h1>Count</h1>
        <p id='count-text'>{counter}</p>
        <div className='btn-box'>

          <button id='inc' onClick={()=>{setCounter(counter+1)}}>Increment</button>
          <button id='dec' onClick={()=>{setCounter(counter-1)}}>Decrement</button>
        </div>
      </div>
      <p>Made By <em><strong>Rajnish Tripathi</strong></em> - 12011284</p>
    </div>
  );
}

export default App;
