import {Link} from "react-router-dom"
import { useState } from "react"
import Axios from "axios"
export default function Login(){
    const[showButton,setShowButton]=useState(false)
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[Id,setId]=useState("")
    
    const handleClick=()=>{
        const data={email:email,password:password}
        Axios.post("http://localhost:4000/user/login",data)
        .then((res)=>{
            const {result,id}=res.data
            setId(id)
            if(result==="SUCCESS"){
                
                setShowButton(!showButton)
            }
        })
        .catch((err)=>console.log(err))
    }
    return(
        <form onSubmit={handleClick} className="vh-100" style={{maxWidth:"40%",margin:"125px auto" }}>
            <h3 className="text-center text-light my-4" >Login Form</h3>
            <input type={"email"} onChange={(event)=>setEmail(event.target.value)} className="form-control my-3" placeholder="Enter Your Email"/>
            <input type={"password"} onChange={(event)=>setPassword(event.target.value)} className="form-control my-3" placeholder="Enter Your Password"/>
            <button type="submit" className="btn btn-outline-success my-3 d-block mx-auto form-control ">LOGIN</button>
            {showButton && <Link to={"/quiz/"+Id} className="btn btn-info form-control">TAKE QUIZ</Link> }
        </form>
    )
}