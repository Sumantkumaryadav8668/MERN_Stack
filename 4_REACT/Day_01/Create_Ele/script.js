
   // Create an element using javascript

           // create element 1
const element = document.createElement("h1");
element.textContent ="hello sumant kaise ho app";
element.className="element";
element.id ="first";
// element.style.width = "100%";
element.style.backgroundColor = "aqua";
element.style.color = "red";
element.style.textAlign = "center";

           // create element 1
const element1 = document.createElement("h2");
element1.textContent ="mai hu badhiya aap kaise ho";
element1.className="element1";
element1.id ="second";
// element.style.width = "100%";
element1.style.backgroundColor = "blue";
element1.style.color = "yellow";
element1.style.textAlign = "center";

document.getElementById("root").append(element);
document.getElementById('root').append(element1)
