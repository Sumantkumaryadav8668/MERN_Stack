import { useState } from "react";

function App(){
  const[Count,setCount] = useState(0);

  return(
    <>
    <h1>Counter :- {Count}</h1>
    <button onClick={()=>setCount(Count+1)}>Increment {Count}</button>
    
    <button onClick={()=>setCount(Count-1)}>Decrement</button>
    </>
  )
}

export default App;