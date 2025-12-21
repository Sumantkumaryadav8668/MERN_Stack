//  Indepand copy 

const user={
    name:'sumant',
    age:21,
    weight:51,
    address:{
        state:"jharkhand",
        city:'palamu',
    },
    amount:20000,
}
     // this is independent value
const user1={...user} 

user1.name='yadav'
console.log(user)
console.log(user1)