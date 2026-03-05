
   // Create Normal Function
function fun(){
    return ("Hello sumant")
}   

console.log(fun())


       // Use Aaync function
// async always applied before function
// async function always return a promise

async function get(){
    // return ("How are you ?")
    return new Promise((resolve,reject)=>{
        reject("How are you ?")
    })
}       

// console.log(get())
const ans =get()
ans.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("Error:",error)
})



      // How to work in parallar way 

async function name(params) {
    // const image = await fetch("userImage");
    // const photo = await fetch("userPhoto");
    // const chat = await fetch("userChat");
       // in this case not work in parellar way so use print in parellar access 
       
    const [image,photo,chat] = await Promise.all([fetch("userImage"),fetch("userPhoto"),fetch("userChat")]) 
}   

name();