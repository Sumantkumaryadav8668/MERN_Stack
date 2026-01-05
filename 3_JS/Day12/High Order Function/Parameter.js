// Higher order function me parameter ko pass kaise kare

function animal(value){
    return function dog(n){
        return value*n
    }
}

         // method  1
// let peat= animal(5)  // first function value
// let a=peat(2)        // secind function value
// console.log(a)


          // method 2
let peat =animal(5)(2)
console.log(peat)          