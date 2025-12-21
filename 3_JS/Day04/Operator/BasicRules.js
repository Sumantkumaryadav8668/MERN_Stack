//          Rules of Javascript

        //  1> null is kloosely equal to undefined only

// console.log(null==undefined);
// console.log(null===undefined);
// console.log(null==0);
// console.log(null=="");
// console.log(null==true);

      // 2> >,<,<=,>= (convert Null-->number and undefined-->NaN)

// console.log(null<0);  
// console.log(null>0); 
// console.log(null<=0); 
// console.log(null>=0);

        // 3> sting 

// string me yah ek ek chatacter ko comparision karta hai than result provide karta hai 
let a="Sumant";
let b="Sumit";

// console.log(a<b);

// If one value is number and second value is string 
// than string convert to number assign to assignment operator

console.log(10>="10");
// Boolean number me convert hota hai (true =1 and false = 0)
console.log(10>true);
console.log(10<true);
console.log(null>="")