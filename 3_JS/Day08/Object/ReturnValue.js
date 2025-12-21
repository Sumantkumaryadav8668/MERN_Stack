// Return type of function

const user={
    name:'sumant yadav',
    age:21,
    amount:25000,
    sum:function(){
        console.log(`How are you ?
        ${user.name}`);
        return 20;
    }
}


const print=user.sum();
console.log(print);