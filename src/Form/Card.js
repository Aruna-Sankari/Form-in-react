import React from "react";
import { useState } from "react";
import './Card.css'
const Card =()=>{
    const [id,setId]=useState("")
    var real='true'
    const [proName,setproName]=useState("")
    const [price,setprice]=useState("")
    const [image,setImage]=useState("")
    const [arr,setArr]=useState([])
    const [isedit,setedit]=useState(false)
    const [index,setindex]=useState()
    const handle=(e)=>{
        if(e.target.name==="proName"){
            console.log(e.target.value,e.target.name);
            setproName(e.target.value)
        }
       else if(e.target.name==="price"){
        console.log(e.target.value,e.target.name);
        setprice(e.target.value)
       }
       else if(e.target.name==="img"){
        setImage(e.target.value)
        console.log(e.target.value);
       }
       else if(e.target.name==="pro-id"){
        setId(e.target.value)
       }
    }
    
    const del=(val)=>{
        let x=arr.map((e)=>{
            return e.id===val?{...e,real:e.real='false'}:e
           
        })
        console.log(x);
        setArr(x)
        
    }
    const subm=(e)=>{
        e.preventDefault()
        if(isedit){
            let obj={id,image,proName,price,real}

            let m=arr.map((v)=>{
                return v.id===index?obj:v
            })
            setArr(m)
            setedit(false)
        }
        else{
            let obj={id,image,proName,price,real}
            setArr([...arr,obj])
        }
        setImage(" ")
        setproName(" ")
        setprice(" ")
        setId(" ")
        setedit(" ")
    }
    const edit=(id)=>{
        setedit(true)
        setindex(id)
        let n=arr.find((e)=>{
            return e.id===id
        })
        setproName(n.proName)
        setprice(n.price)
        setImage(n.image)
        setId(n.id)
        setedit(n)
    }
    console.log(arr);
    return(
        <div>
            <h1 style={{textAlign:"center"}}>FORM3</h1>
            <form onSubmit={subm} className="form">
                <label style={{paddingRight:"10px"}}> Id:</label>
                <input type="text" name="pro-id" value={id} onChange={handle}/><br></br><br></br>
                <div>
                    <label style={{paddingRight:"10px"}}>Image:</label>
                    <input type="text" name="img" value={image} onChange={handle}/><br></br><br></br>
                </div>
                <div>
                    <label style={{paddingRight:"10px"}}>Name:</label>
                    <input type="text" name="proName" value={proName} onChange={handle}/><br></br><br></br>
                </div>
               <div>
                    <label style={{paddingRight:"10px"}}>  Price:</label>
                    <input type="text" name="price" value={price} onChange={handle}/><br></br><br></br>
               </div>
               
                <div className="btn">
                    <button className="btn-sub">Submit</button>
                </div>
                
            </form>
            <div className="row">
            {
                arr.map((e,i)=>{
                    return e.real==='true'?
                        <div className="col"key={i}>
                            <div className="card">
                                <img src={e.image} alt=""/>
                            <div className="cont">
                                <h3>{e.proName}</h3>
                                <p>{e.price}</p>
                            </div>
                            <div className="card-btn">
                                <div>
                                <button className="btn-edit" onClick={()=>edit(e.id)}>Edit</button>
                                </div>
                                <div>
                                <button className="btn-del" onClick={()=>del(e.id)}>Delete</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    :" "
                })
            }
            </div>
        </div>
    )
}
export default Card