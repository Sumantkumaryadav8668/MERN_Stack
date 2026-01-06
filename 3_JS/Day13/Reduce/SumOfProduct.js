//  Reduce means sum of all product 
// Syntax of Reduce:- 


// accumulator means like as sum of product 
// currentvalue means current value in given array

// store = arrayname.reduce((accumulator,currentvalue)=?{ 
//     return accumulator+currentvalue; // total sum of all product 
// },inidilization of accumulator)


let product =[
    {name:"laptop",price:5000,stock:true},
    {name:"headphone",price:1500,stock:false}
]

         // map
// let ans=product.map((num)=>num)
// console.log(ans)


         // Reduce
    // accumulator means sum of al product
    // currentvalue means current value in array

let sum=product.reduce((accumulator,currentvalue)=>{
    if(currentvalue.stock)
    return accumulator+currentvalue.price;
    else
    return accumulator
},0)         

console.log(sum)