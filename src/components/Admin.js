import Axios from "axios";
import {useEffect,useState} from "react"
import AdminList from "./AdminList";
export default function Admin(){
    const[arr,setArr]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:4000/user/")
        .then((res)=>{
            if(res.status===200){
                setArr(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{console.log(err)})
    },[])
    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <AdminList obj={val}/>
        })
    }
    return(
        <table className="table table-bordered table-striped table-sucess" >
             <thead>
                 <tr>
                     <th className="text-center">Name</th>
                     <th className="text-center">Email</th>
                     <th className="text-center">Password</th>
                     <th className="text-center">Action</th>
                 </tr>
             </thead>
             <tbody>
                 {ListItems()}
             </tbody>
        </table>
     )
}