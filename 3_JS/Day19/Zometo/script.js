// Promise
   /// Zemoto Builds

    // Detail order
const orderdetail ={
    orderID : 8668,
    food : ['pizza','burger','biryani'],
    price:320,
    customerName:"sumant",
    cumtomerLocation:'bhopal',
    restautentLocation:'MP nagar'
}       

    // order ke liye
function order(orderdetail){  // aurgument receive
    console.log(`${orderdetail.price} Payment is in Process`);
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if(Math.random()>0.05){    
                console.log(`Your Payment ${orderdetail.price} Successful`)
                orderdetail.status =true;
                resolve(orderdetail)
            }
            else{
                reject("Payment is Faild")
            }
        },3000)
    })
}       

   // Food Related
function make(orderdetail){
    console.log(`Your Food prepration started ${orderdetail.food}`)
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        if(Math.random()>0.15){    
            console.log('Your order is now prepared');
            orderdetail.token =70;  // pickup ke token diya gaya
            resolve(orderdetail)
        }
        else{
            reject("Food are not available in restaurent")
        }
    },4000)
    })
   
}   

    // Pickup Order
function pickup( orderdetail){
    console.log(`Delivery boy is on way to pickup order from ${orderdetail.restautentLocation}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(Math.random()>0.12){    
            console.log('I have pickup order')
            orderdetail.receive =true;
            resolve(orderdetail)
        }
        else{
            reject("Delivery boy are not pickup the order")
        }
    },4000);
    })
  
}    


    // Deliver 
function Deliver(orderdetail){
    console.log(`I am way to deliver order ${orderdetail.cumtomerLocation}`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(Math.random()>0.02){
           console.log(`${orderdetail.customerName} Your Order successfully`)
        //    resolve(orderdetail)
        }
        else{
            reject("Reached wrong address")
        }
    },3000)
    })
   
}

         // Promise
         // .then ka use karenge data ko access ke liye

order(orderdetail)
.then((orderdetail)=>make(orderdetail))
.then((orderdetail)=>pickup(orderdetail))
.then((orderdetail)=>Deliver(orderdetail))
.then((orderdetail)=>{
    console.log(orderdetail)
})
.catch((error)=>{
    console.log("Error" ,error)
})         