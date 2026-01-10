// document.getElementsByTagName('body').style.marginTop = '0'

let temp=document.getElementById("first");
temp.style.color="blue"
temp.style.display="flex";
temp.style.justifyContent="center"
temp.style.marginTop="0%"

         // create list using java acript
let temp1=document.getElementById("third");

let temp2=document.createElement("li");
temp2.textContent="potato";
temp2.style.backgroundColor="yellow"
temp2.style.color="red"

let temp3=document.createElement("li");
temp3.textContent="tomato";
temp3.style.backgroundColor="green"

let temp4=document.createElement("li");
temp4.textContent="onion";

let temp5=document.createElement("li");
temp5.textContent="chilli";

const btn = document.createElement('button');
btn.innerText = "Click me"
btn.style.height = '60px'
btn.style.width = '120px'

// btn.onclick = ()=>{
//     const change = document.getElementById('second');
//     change.innerText = "Main hun samir"
// }

// btn.onclick = function chalega (){
//     const change = document.getElementById('second');
//     change.innerText = "Main hun samir"
// }

function chalega (){
    const change = document.getElementById('second');
    change.innerText = "Main hun samir"
}

// btn.addEventListener('click', ()=>{
//     const change = document.getElementById('second');
//     change.innerText = "Main hun samir"
// })

btn.addEventListener('click', chalega)

temp1.append(temp2,temp3);
temp1.prepend(temp4);
temp1.children[1].after(temp5)

temp1.append(btn)


