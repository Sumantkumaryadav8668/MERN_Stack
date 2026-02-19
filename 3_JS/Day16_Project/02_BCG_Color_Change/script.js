let body=document.querySelector('body')
let parent=document.getElementById('parent')

parent.addEventListener('click',(obj)=>{
    let child=obj.target;
    body.style.backgroundColor=child.id;
})