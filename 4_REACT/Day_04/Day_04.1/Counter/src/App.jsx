import { useState } from "react"

function App(){
  // let counter =0;
  // function IncreaseNum(){
  //   counter++;
    
  //   const para = document.querySelector('p');
  //   para.textContent = `Counter: ${counter}`
  //   const buttan = document.getElementById('increase')
  //   buttan.textContent= `Increase ${counter}`
  //   console.log(counter);
  // }

  // function Decrease(){
  //   counter--;
  //   const para = document.querySelector('p');
  //   para.textContent = `Counter: ${counter}`
  //   const buttan1 = document.getElementById('decrease')
  //   buttan1.textContent= `Decrease ${counter}`
  //   console.log(counter);
  // }


  const[Count,setCount] = useState(0);


  return(
    <>
    <p>Counter: {Count}</p>
    <button id="increase" onClick={()=> setCount(Count+1)}>Increase {Count}</button>
    <button id="decrease" onClick={()=>setCount(Count-1)}>Decrease {Count}</button>
    </>
  )
}

export default App