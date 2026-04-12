import { useEffect, useState } from "react";

function Clock(){

    const[Timer,setTimer] = useState(new Date().toLocaleTimeString())
    const[Show,setShow] = useState(true)

    useEffect(()=>{

        if(!Show) return

        const time= setInterval(()=>{
            setTimer(new Date().toLocaleTimeString())
            console.log("hiii")
        },1000)

        return()=>{
            clearInterval(time) 
        }
    },[Show])

    return (
        <>
        <button onClick={()=>setShow(!Show)}>{Show?"Hide":"Show"}</button>
        {
            Show && <h1>Timer:- {Timer} </h1>
        }
        </>
    )
}

export default Clock;