// console.log('Hello World Start')

            // Method 1

// const data = fetch("https://api.github.com/users");  // Asynchronous task
//     // Rewuest ke time read karne par pending bata hai
//  console.log(data);

//    // Data read tab hi kar sakte hai jab ya to fullfield ya reject ho jaye 

// const p1 = data.then((Response)=>{   // .then fetch data ko read karta hai
    
//     // console.log(Response.json());  //Asynchronous task

//     return Response.json()
// })  
//  console.log(p1)  // p1 ko direct ham access nahi kar sakte hai kyu ki yah data ko fetch karta hai direct access karne par promise dega  

//   // Infomaion dikhane ke liye .json ka use karte hai
// p1.then((data)=>{
//     console.log(data);
// })  

           // Method 2


           // This is called Promise Chaning 
const info = fetch("https://api.github.com/users")
.then((data)=>{
    if(!data.ok){   // yah server par check karta hai yadi response nahi mila to ye condition chalega
        throw new Error("data is not founds");
    }
    return data.json();
})
.then((detail)=>{
    // console.log(detail);

        // All github user ka Image
    for(let i=0;i<30;i++){
    const div = document.getElementById("first");
    const image = document.createElement('img');
    image.src = detail[i].avatar_url;
    image.style.height ="180px";;
    image.style.width ="180px"
    div.append(image);
    }
})

   // If Internet Ishow then show condition
.catch((error)=>{
    const div = document.getElementById("first");
    div.textContent = error.message;
})   

// console.log('Hello World End')