import { useState,useEffect } from "react";

function App(){

    const[user,setUser] = useState([]);

    async function Githubprofile(){
        const response =await fetch("https://api.github.com/users");
        const data = await response.json();
        setUser(data);
        console.log("hello")
    }
    // Githubprofile();

    useEffect(() => { // useEffect is call by function ans it's a one time run at the end
        Githubprofile();
    }, []);

    return(
        <>
            <h1>GitHub Login</h1>
            <div>
                {
                    user.map(user=>(
                        <img src={user.avatar_url} height={"100px"} width={"100px"} />
                    ))
                }
            </div>
        </>
    )
}

export default App;