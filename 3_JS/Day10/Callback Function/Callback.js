//  Create call back function

function ram(){
    console.log("I am fine ?")
}

function raj(callback){
    console.log("How are you ?")
    callback();
}

raj(ram)