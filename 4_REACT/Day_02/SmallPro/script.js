    // Create multiple function
  
      // Header 
function Header(props){
    return(
        <h1>Hello Sir, Welcome to Website {props.name}</h1>
    )
}

      // Main Body
function Main({user}){
    return(
        <>
        <h2>Hii {user.name}</h2>
        <h2>This page is part of first Website</h2>
        <h2> {user.age>18?"Login this page":"Not Login"} Your city is {user.city} </h2>

        </>
        
    )
}

      // Footer
function Footer({name}){
    return(
        <>
        <h3 style={{backgroundColor: 'aqua'}}> {name} Thanks for Visiting Website</h3>
        <h3>Nice to meet you {name}</h3>
        </>
    )
}

      // Result
function Result(){
    return(
        <>
    <Header name="Sumant"></Header>
    <Main user={{name:'Sumant' ,age:21,city:'Palamu'}}></Main>
    <Footer name='Sumant'></Footer>
    </>
    )
}

// const element= Result()
      // Display
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Result/>)      