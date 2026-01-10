let pc=document.getElementById("pc")
pc.addEventListener('click',()=>{
   console.log('i am pc')
}) // by default false 

document.getElementById('laptop').addEventListener('click',()=>{
    console.log('i am laptop')
},true) // enum: true ya false

document.getElementById('tab').addEventListener('click',()=>{
    console.log('i am tab')
})  // by default false