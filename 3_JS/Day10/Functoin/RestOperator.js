//  Multiple aurgument pass

function sum(...n){
    let sum=0
    for(let a of n){
        sum+=a;
    }
    console.log(sum)
}

sum(10,20)
sum(2,5,6,7,8,9)