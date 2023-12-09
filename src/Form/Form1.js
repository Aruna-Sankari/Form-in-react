import React from "react";
import { useState } from "react";

const Form1=()=>{
    const [username,setUsername]=useState("Enter Username")
    const [usepass,setUserpass]=useState("Enter Password")
    let check=(e)=>{
        if(e.target.name==="username"){
            setUsername(e.target.value)
            
        }
        else if(e.target.name==="pass"){
            setUserpass(e.target.value)
            
        }
    }
   let Pass=document.getElementById("pass")
   let User=document.getElementById("user")
    let sub=(e)=>{
        e.preventDefault()
        if(Number(username)){
            User.innerHTML="Please Enter the correct name"
        }
        if(usepass.length<8){
            Pass.innerHTML="The password must contain more than 8 character";
        }
      
    }
    return(
        
        <div>
            <h1 style={{textAlign:"center"}}>FORM1</h1>
            <form onSubmit={sub} style={{textAlign:"center"}}>
                <label>UserName:</label>
                <input type="text" name="username" placeholder={username} onChange={check} style={{marginLeft:"10px"}}/><br></br>
                <p id="user"style={{color:"red"}}></p>
                <div>
                <label>Password:</label>
                
                <input type="password"name="pass" placeholder={usepass} onChange={check} style={{marginLeft:"10px"}}/><br></br>
                <p id="pass"style={{color:"red"}}></p>
                </div>
                
                
                <button >Submit</button>
            </form>
        </div>
    )
}
export default Form1