

let temp1=document.getElementById("first")
temp1.style.color="red"
temp1.style.backgroundColor="yellow"

    // create new element and insert the any 

let temp = document.createElement("h3")
temp.textContent="hello sumant sir kaise hai"
temp.id="third"
temp.style.color="blue"
temp.style.backgroundColor="aqua"
temp.style.fontSize = "30px"; 


temp1.after(temp)