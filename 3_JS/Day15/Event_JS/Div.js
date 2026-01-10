let grandfather=document.getElementById("grandfather")
// for(let element of grandfather.children){
//     element.addEventListener('click',()=>{
//         element.textContent='i am click';
//     })
// }
let temp=grandfather.children[0];
temp.addEventListener('click',()=>{
    temp.textContent='i am clicked'
})