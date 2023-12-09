import React from 'react'
import {useState} from 'react'
const Login=()=>{
    const[user,setUsername]=useState()
    const[pass,setPassword]=useState()
    let dUser="aruna"
    let dPassword="1234"
    const handle=(e)=>{
        if(e.target.name==="username")
        {
            setUsername(e.target.value)
        }
        else if(e.target.name==="password")
        {
            setPassword(e.target.value)
        }

    }
    const submit=(t)=>{
        if(dUser===user && dPassword===pass){
            alert("Login Successfully")
        }
        else{
            alert("Invalid")
        }
        setUsername("")
        setPassword("")
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>FORM2</h1>
            <form onSubmit={submit} style={{textAlign:"center"}}>
                <label>Username:</label>
                <input type="text" name="username" onChange={handle}></input><br></br><br></br>
                <label>Password:</label>
                <input type="password" name="password"  onChange={handle}></input><br></br><br></br>
                <button style={{backgroundColor:"darkorchid",color:"white",padding:"7px",fontSize:"14px",fontWeight:"bold"}}>Submit</button>
            </form>
        </div>
    )

}
export default Login;