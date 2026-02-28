  // convert JS jbject to JSON :-

const jsobjests ={
    name:'sumant',
    age:22,
    address:"palamu"
}  
  // convert JSON 
const jsonformate = JSON.stringify(jsobjests);
console.log(jsonformate);




     // Convert JSON to JS object

const jsonform = `{
    "name":"sumant",
    "age":32,
    "address":"palamu"
}`; 
        // convert JS object
const jsobject1 = JSON.parse(jsonform);
console.log(jsobject1);        


