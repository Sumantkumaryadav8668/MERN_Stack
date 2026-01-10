// function clickme(){
//     let temp=document.getElementById("first")
//     temp.textContent="kaise hai aap sumant ";
// }

             // in this fuction through the one action at one time
// let element = document.getElementById("first")
// element.onclick = function clickme(){
//     element.textContent='kaise hai aap sumant'
//     element.style.backgroundColor='yellow'
// }


                // Best method for click function
let element = document.getElementById("first")
             // click based

// element.addEventListener('click',()=>{
//     element.textContent='kaise hai aap sumant'
//     element.style.backgroundColor='pink'
// })

// element.addEventListener('dblclick',()=>{
//     element.textContent='Hello sumant kumar yadav'
//     element.style.backgroundColor='white'
// })

            // mouse based

// mouseenter and mouseleave
element.addEventListener('mouseleave',()=>{
    element.textContent='kaise ho tum'
    element.style.backgroundColor='green'
})            