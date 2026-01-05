//  1 >  Globla Scope  -> accessible to everyone

let a=10;  // This data is Globly accesse
// console.log(a)

function name(){
    console.log(a)
}
// console.log(a)

// name()

//  2 > functional Scope

// console.log(b)  // not accessible
function ram(){
    let b=20;
    console.log(b)  // accessible
}
// console.log(b)  //not accessible
// ram()

//   3>  Block Scope

// console.log(c)   //not accessible
if(true){
    let c=30;
    console.log(c)
}
// console.log(c)    //not accessible