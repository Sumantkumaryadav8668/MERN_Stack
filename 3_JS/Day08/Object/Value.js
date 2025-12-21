//   Print keys and values in object through loop

const user={
    names:'sumant',
    age:21,
    amount:30000,
}

// using foor in loop

                    // Method 1
                    
// for(let key in user){
//     // console.log(prints keys, print value)
//     console.log(key, user[key]);
// }

                // Method 2

const name=user.names;
const age=user.age;

console.log(name,age);