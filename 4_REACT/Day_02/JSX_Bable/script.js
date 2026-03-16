           // create element using react

// const element= React.createElement('h1',{className:'element',id:'first'},"Hello sir")

// const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(element)


            // CreateElement using JSX
        // JSX :- look like as HTMl

// const element = <h1>Hello Sumant kaise ho aap</h1>    
//        // React JSX ko nahi samjhta hai
//        // Then Babel :- 
//                     //   Babel is a Javasvript compiler. It is convert the JSX to React.createElement()

// const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(element)


            //    Multiple Element Create using JSX :-

const element = <div>
    <h1 style={{backgroundColor:'red'}}>Hello sumant </h1>
    <h2>kaise ho tum</h2>
</div>    

        // This is not write for sutaible syntax that means not present in parent compiler confuse
// const element1 = 
//     <h1 style={{backgroundColor:'red'}}>Hello sumant </h1>
//     <h2>kaise ho tum</h2>


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(element)