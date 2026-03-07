          // Create Class 

class person{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }    
      // If create a object and no return any value this condition get undefine
    feel(){   
        console.log(`Hii ${this.name}`);
    }
}          

// const person1 = new person("Sumant",21,"palamu");
// const person2 = new person("Satish",22,"Jharkhand")
// console.log(person2.feel())



/// class memory space ko bachata hai 
// iss me ek hi constructor ke through ham multiple person ko use kar sakte hai



                // Based to Account customer

class customer extends person{
    constructor(name,age,address,account,balance){
        super(name,age,address);  // yah parent ke properties ko print ke liye use kiya jata hai
        this.account = account;
        this.balance = balance;
    }
    check(){
        return this.balance;
    }
}                

const detail =new customer("Sumant",21,"Jharkhand",256,1050);
console.log(detail)