let temp=document.querySelector('form')

temp.addEventListener('submit',(obj)=>{
    obj.preventDefault();
    let boy=document.getElementById('boy')
    let girl=document.getElementById('girl')

    let l1=boy.value.length;
    let l2=girl.value.length;

    let result=Math.pow(l1+l2,3)%101;

    document.querySelector('button').textContent=`Result:  ${result} %`
    temp.reset();
})
