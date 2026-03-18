    // React Component :-
                    //   React Component that means function but function namae start from Capital letter.
                    //   It's work for return component


                //  React Component without parameter    
// function Element(){
//     return(
//         <div>
//             <h1 id="first">Hello sir, How are you ?</h1>
//             <h2>I'm fine and you !</h2>
//         </div>
//     )
// }          


//                 // React Component without parameter    
// function Element(name){
//     return(
//         <div>
//             <h1 id="first">Hello sir, How are you ? {name}</h1>
//             <h2>I'm fine and you !</h2>
//         </div>
//     )
// }        

// const root =  ReactDOM.createRoot(document.getElementById('root'))

// root.render(Element("Sumant"))   // function call method 1
// // root.render(<Element/>)     // function call method 2 






         // kaun kaun ke Javascript ke expression ko likh sakte hai in {}

// Text/Element :- Javascript ke expression ko ham ise {} ander likh sakte hai
// like :- Number,String,Null,Undefine,True,False,Array
// Javascript ke object ko nahi likh sakte hai yah error batata hai


// string,number,array are valied define in side the javascript expression
// true,flase,null,undefine thrse are valied but not show in the display
// object is error in side the javascript expression
const element = <h1>Hello sir {10+30}</h1>


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)