// there are three phase of bubbling works
// 1> Capture phase  
// 2> Target phase
// 3> Bubbling phase

// If Capture phase is on than,Top to down approach (use time par trigger ko on kar diya jata hai)
// If Capture phase is off than,Down to top approach (Bubbling phase ,tab trigger karta hai)

// let pc=document.getElementById("pc")
// pc.addEventListener('click',()=>{
//    console.log('i am pc')
// }) // by default false 

// document.getElementById('laptop').addEventListener('click',()=>{
//     console.log('i am laptop')
// },true) // enum: true ya false

// document.getElementById('tab').addEventListener('click',()=>{
//     console.log('i am tab')
// })  // by default false


             // kis child par click huaa hai
let pc=document.getElementById("pc")
pc.addEventListener('click',(obj)=>{
   console.log(obj.target)
})             