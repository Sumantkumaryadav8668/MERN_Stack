   // Prototypes

              // First create normal object 
// const obj={
//     name:'sumant',
//     age:21,
//     address:'palamu',
//     college: function(){
//         console.log('College is place of knowledge ')
//     }
// }   
//           // read the element 
// // console.log(obj);    // object read
// // obj.college();      // fuction call inside the object

//         // obj_name.hasOwnProperty("name") parameter jo pass hota hai use check karta hai 
//         //  ki iss name se koi key hai ya nahi yadi hai to true other wise false
// console.log(obj.hasOwnProperty("name"));


// const arr = [10,22,30];
// console.log(arr.length)  // .length like as work prototype



                 // Prototype
const obj={
    name:'sumant',
    age:21,
    address:'palamu',
    college: function(){
        console.log('College is place of knowledge ')
    }
}       

const obj1 = {
    account:182,
    branch:"B.tech"
}

obj1.__proto__ = obj;  // obj ke data ko inherit kar raha hai obj1
// console.log(obj1.name)
console.log(obj1.hasOwnProperty("name"))