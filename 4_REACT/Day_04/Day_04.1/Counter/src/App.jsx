
function App(){
  let counter =0;
  function IncreaseNum(){
    counter++;
    
    const para = document.querySelector('p');
    para.textContent = `Counter: ${counter}`
    const buttan = document.getElementById('increase')
    buttan.textContent= `Increase ${counter}`
    console.log(counter);
  }

  // function Decrease(){
  //   counter--;
  //   const para = document.querySelector('p');
  //   para.textContent = `Counter: ${counter}`
  //   const buttan1 = document.getElementById('decrease')
  //   buttan1.textContent= `Decrease ${counter}`
  //   console.log(counter);
  // }

  return(
    <>
    <p>Counter: {counter}</p>
    <button id="increase" onClick={IncreaseNum}>Increase {counter}</button>
    {/* <button id="decrease" onClick={Decrease}>Decrease {counter}</button> */}
    </>
  )
}

export default App