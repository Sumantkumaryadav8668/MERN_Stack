import { useState,useEffect } from "react";

function App(){

    const[user,setUser] = useState([]);
    // const[Name,setName] = useState("")
    const[Count,setCount] = useState()

    useEffect(()=>{
        async function Githubprofile(){
            const response =await fetch(`https://api.github.com/users?per_page= ${Count}`);
            const data = await response.json();
            setUser(data);
            // console.log("hello")
        }
        Githubprofile();
    },[Count]);//[] this is called Dependence array

             /// Method 2
    // useEffect(() => { // useEffect is call by function ans it's a one time run at the end
    //     Githubprofile();
    // }, []);


    // function Changetext(e){
    //     console.log(e.target.value)
    //     setName(e.target.value.toUpperCase())
    // }

    return(
        <>
            <h1>GitHub Login Pages</h1>
            <input style={{display: "flex",marginBottom:"25px",marginLeft:"50px",height:"20px",width:"200px",fontSize:"25px"}} type="number" value={Count} onChange={(e)=>setCount(e.target.value)} />
            <div style={{ gap: "20px", display: "flex",alignItems:"center",justifyContent:"center", flexWrap: "wrap" }}>
                {
                    user.map(user=>(
                        <img src={user.avatar_url} height={"150px"} width={"150px"} key={user.login} />
                    ))
                }
            </div>
        </>
    )
}

export default App;