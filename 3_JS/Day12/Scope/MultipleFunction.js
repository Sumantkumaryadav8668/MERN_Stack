// same variable let and const in function

function name(){
    let a=10;
    function ram(){
        const a=20;
        function raj(){
            // let a=50
            console.log(a)
        }
        console.log('hello sir');
        raj();
    }
    ram();
}

name()