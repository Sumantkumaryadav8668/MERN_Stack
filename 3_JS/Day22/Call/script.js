    // use call one function in multiple place

function get(){
    console.log(`Hii ${this.name}`)
}    

function incre(value,address){
    this.age+=value;
    this.address=address;
    console.log(this.age)
    console.log(this.address);
}
           // objects
const user ={
    name :'sumant',
    age:20
}

const user1 ={
    name:'satish',
    age:22
}

const user2 ={
    name:'samir',
    age:20
}

         // call function
// get.call(user)
// incre.call(user,10,"palamu");

           // apply that means pass the value in array form
incre.apply(user1,[15,'Jharkhand'])

          // bind that mean store the value after you call anytime 
const store =incre.bind(user2,20,"patna") 
store()         // call bind yah stoer kar leta hai ise jab chahe tab call kar sakte hai