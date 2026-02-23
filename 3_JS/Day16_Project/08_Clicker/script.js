const body=document.querySelector('body');

body.addEventListener('click',(obj)=>{
    // console.log(obj.clientX,obj.clientY)

    const circleele = document.createElement('div');
    circleele.classList.add('circle');
    circleele.textContent="Hi";

    const color=['red','green','orange','blue','pink','aqua','purple'];
    circleele.style.backgroundColor = color[Math.floor(Math.random()*7)]
    circleele.style.left = `${obj.clientX-25}px`;
    circleele.style.top = `${obj.clientY-25}px`;

    body.append(circleele);

    setTimeout(()=>{
        circleele.remove();
    },5000);
})