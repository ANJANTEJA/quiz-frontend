import Question from "./Question";
import questions from "../questions.json"
import Axios from "axios"
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";
export default function Quiz(){
    let tempMarks=[]
    const[marks,setMarks]=useState([])
    const changeHandler=(value,index)=>{
        tempMarks=marks
        tempMarks[index]=value
        setMarks([...tempMarks])
    }
    const {id}=useParams();
    
    const[InitialValue,setInitialValue]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:4000/user/update-marks/"+id)
        .then((res)=>{
            if(res.status===200){
                console.log(res.data)
                setInitialValue(res.data)
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[id])
    console.log(InitialValue)
    
    const handleClick=()=>{
        alert(marks.reduce((a,b)=> a+b,0)+"/10")
    }
    return(
        <div className="text-dark bg-tranparent" style={{maxWidth:"80%",margin:"0px auto"}}>
            {
                questions.map((question,index)=>{
                    return(
                        <Question question={question} index={index} changeHandler={changeHandler}/>
                    )
                })
            }
            <button onClick={handleClick} className="btn btn-success d-block form-control-lg mx-auto">SUBMIT</button>
        </div>
    )
}