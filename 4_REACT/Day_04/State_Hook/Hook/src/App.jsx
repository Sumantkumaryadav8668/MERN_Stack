import { useState } from "react";

function App(){
            // syntex of Hook
  // datatype[variable,function] =useState(value);

  let [count,SetCount] =useState(0);

  function Increase(){
    count++;    // count value
    SetCount(count) // pass count value
    // console.log(count)
  }

  function Decrease(){
    count--;    // count value
    SetCount(count) // pass count value
    // console.log(count)
  }

  return(
    <>
    <p>Counter : {count}</p>
    <button onClick={Increase}>Increase {count}</button>
    <br />
    <br />
    <button onClick={Decrease}>Decrease </button>
    </>
  )
}

export default App;