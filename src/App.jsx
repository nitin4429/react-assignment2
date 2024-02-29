import { useState } from 'react';
import './App.css'
function App(){
const[x,setX] = useState(0);
  return (
   <div id="inc-dec">
     <div id="count">
      {x}
     </div>
    <div id="button">
      <button onClick={() => setX(x+1)}>Increment</button> <span><button onClick={() =>{setX(x-1)}}>Decrement</button></span> 
    </div>
   </div>
  )
}

export default App;
