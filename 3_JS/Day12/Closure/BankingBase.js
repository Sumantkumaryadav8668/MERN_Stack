// Amount Deposite and Withdraw in Bank account

// let balance=1000;

// let bank={  // Object
//     // balance: 1000,  // object ka variale method nahi access nahi karta hai
//                       //balance variable ko access ke liye this keyword use karte hai
//     deposite: function(amount){
//         if(typeof amount==='number' && amount>0){
//             balance+=amount; 
//             return balance;
//         }
//     },
//     withdraw:function(amount){
//         if(typeof amount==="number" && balance>=amount && amount>0){
//             balance-=amount;
//             return balance;
//         }
//     },
//     getbelance:function(){
//         return balance;
//     }

// }
   // In this case of variable is direct access out side of object

// bank.balance="sumant"
// bank.deposite(2000);
// console.log(bank.deposite(200));
// console.log(bank.withdraw(200));
// console.log(bank.getbelance())


function bankaccount(){  // function
    let balance=1000;

    let bank={  // Object
        deposite: function(amount){   // method
            if(typeof amount==='number' && amount>0){
                balance+=amount; 
                return balance;
            }
        },
        withdraw:function(amount){   //method
            if(typeof amount==="number" && balance>=amount && amount>0){
                balance-=amount;
                return balance;
            }
        },
        getbelance:function(){    //method
            return balance;
        }

    }
    return bank;
}

console.log(bankaccount().withdraw(1555))
console.log(bankaccount().getbelance())