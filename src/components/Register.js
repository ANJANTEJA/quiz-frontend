import Axios from "axios";
import { useState } from "react";
export default function Register(){
    const[name,setName]=useState("")
    const[email,setEmail] =useState("")
    const[password,setPassword]=useState("")
    const[repassword,setRepassword]=useState("")

    const handleClick=()=>{
        if(password===repassword){
            const data={name:name,email:email,password:password}
        Axios.post("http://localhost:4000/user/create-user",data)
        .then((res)=>{
            if(res.status===200){
                alert("Record added sucess")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
        }
        else{
            alert("Password and Re-Enter Password are not matching")
        }
    }
    return(
        <form onSubmit={handleClick} className="vh-100" style={{maxWidth:"40%",margin:"125px auto" }}>
            <h3 className="text-center text-light my-4" >Registration Form</h3>
            <input onChange={(event)=>{setName(event.target.value)}} className="form-control my-3" placeholder="Enter Your Name"/>
            <input type={"email"} onChange={(event)=>setEmail(event.target.value)} className="form-control my-3" placeholder="Enter Your Email"/>
            <input type={"password"} onChange={(event)=>setPassword(event.target.value)} className="form-control my-3" placeholder="Enter Your Password"/>
            <input type={"password"} onChange={(event)=>{setRepassword(event.target.value)}} className="form-control my-3" placeholder="Enter Your Re-Enter Password"/>
            <button type="submit" className="btn btn-outline-success my-3 d-block mx-auto form-control ">REGISTER</button>
        </form>
    )
}