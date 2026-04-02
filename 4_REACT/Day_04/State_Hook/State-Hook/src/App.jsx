import { useState } from "react";


function App(){
  // syntex of Hook
  // datatype[variable,function] =useState(value);

  let [count,SetCount] =useState(0);

  function Increase(){
    count++;
    SetCount(count)
    // console.log(count)
  }

  return(
    <>
    <p>Counter :{count}</p>
    <button onClick={Increase}>Increase {count}</button>
    </>
  )
}

export default App;