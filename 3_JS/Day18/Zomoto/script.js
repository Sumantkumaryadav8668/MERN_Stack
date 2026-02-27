// Callback Hall
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
function order(orderdetail ,Call){  // aurgument receive
    console.log(`${orderdetail.price} Payment is in Process`);
    setTimeout(()=>{
        console.log(`Your Payment ${orderdetail.price} Successful`)
        orderdetail.status =true;
        Call(orderdetail);  // next function me customer ke orderdetail ko bheja raha hai
    },3000)
}       

   // Food Related
function make(orderdetail ,call){
    console.log(`Your Food prepration started ${orderdetail.food}`)
    setTimeout(()=>{
        console.log('Your order is now prepared');
        orderdetail.token =70;  // pickup ke token diya gaya
        call(orderdetail);
    },4000)
}   

    // Pickup Order
function pickup( orderdetail ,call){
    console.log(`Delivery boy is on way to pickup order from ${orderdetail.restautentLocation}`);
    setTimeout(()=>{
        console.log('I have pickup order')
        orderdetail.receive =true;
        call(orderdetail);
    },4000);
}    


    // Deliver 
function Deliver(orderdetail){
    console.log(`I am way to deliver order ${orderdetail.cumtomerLocation}`);
    setTimeout(()=>{
        console.log(`${orderdetail.customerName} Your Order successfully`)
    },3000)
}

         // Callback Hell (
         // that means callback ke andar callback)

order(orderdetail,(orderdetail)=>{     // this is for order callback function
    make(orderdetail ,(orderdetail)=>{    // this is for make callback function
        pickup(orderdetail, (orderdetail)=>{    //this is for pickup callback function
            Deliver(orderdetail);    // this is for Deliver callback function
        })
    })
})