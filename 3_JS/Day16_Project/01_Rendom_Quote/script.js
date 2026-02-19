let arr=['I am fine','I am good','I am going to college','I am going to school','I am big','I am small','Mai hu boy','Farmer is great man','Mai hu ek student','Frontend developer']

let button=document.querySelector('button')
let element=document.querySelector('h1')

button.addEventListener('click',()=>{
    let index=Math.floor(Math.random()*10);
    element.textContent=arr[index];
})