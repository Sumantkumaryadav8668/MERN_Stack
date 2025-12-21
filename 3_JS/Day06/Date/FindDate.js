     // Find the date of our PC time 
        // Create Method 1
//  first that create the object like this

// const name = new Date();

        // This is show the time of UTC(Univarasal Time Corsinate) 
// console.log(name);

//         // This is show the time of our PC time with months name
// console.log(name.toString());
// //      // This is show the time of our PC time with months number
// console.log(name.toISOString())
// //      this functio is show the India time and date
// console.log(name.toLocaleString());



                // Local time(means jo samay chal raha hai)

        // Today Day kaun sa hai in number 
// console.log(name.getDay()); 
//         // Today Date kya hai
// console.log(name.getDate());
//         // This year kaun sa hai
// console.log(name.getFullYear());
//         // This month kaun sa hai index is starting from 0
// console.log(name.getMonth());
//         // kitne Hours ho rahe hai
// console.log(name.getHours());   




        // Create Methon 2
        // Date(year,Month,Date,Hour,Minute,Second,Millisecond)
        // Month starting from 0 and Day starting  from 1
// const num = new Date(2025,9,11,4,5,45,123);

// console.log(num);
// console.log(num.toString());




                // create Method 3

        // Find the date of Millisecond It is also know as Timestamp
        
const now = Date.now();
        // Create the Millisecond in value 
console.log(now); 

const dates = new Date(now);
        // Convert the MIllisecond to UTC date      
console.log(dates)
console.log(dates.toString())
        // Find starting date of Timestamp
const dat = new Date(0);
        // Starting from Timestamp is (Thu Jan 01 1970 05:30:00)   
console.log(dat.toString());   
            