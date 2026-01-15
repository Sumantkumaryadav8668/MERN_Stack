
// let temp=parent;
// temp.addEventListener('click',(bj)=>{
//     console.log(bj.target)
//     // bj.target.textContent="i am clicked";
// })

                 // Remove EventListener

function listener(obj){
    obj.target.textContent="i am sumant"
        // at list one time run
    document.getElementById('parent').removeEventListener('click',listener)    

} 

document.getElementById('parent').addEventListener('click',listener)

            // on click then no performe action
// document.getElementById('parent').removeEventListener('click',listener)