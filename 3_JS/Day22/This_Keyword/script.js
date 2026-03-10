     // 'use strict'   yah latest verson ko use karta hai in JS

// 'use strict';
// let a  = 10;
// b=20
// console.log(a,b);


          // Learn about this keyword
// console.log(this);        // this keyword empty onject ko point karta hai  


const user ={
     name:'sumant',
     age:21,
     address:'palamu',
     get(){
          console.log(`Hii ${this.name}`)
     }
}

user.get();