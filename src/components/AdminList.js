import  Axios  from "axios";
import {Link} from "react-router-dom";
export default function AdminList(props){
    const {_id,name,email,password}=props.obj;
    const handleClick=()=>{
        Axios.delete("http://localhost:4000/user/delete-student/"+_id)
        .then((res)=>{
            if(res.status===200){
                alert("Record deleted successfully")
                window.location.reload();
            }
        })
        .catch((err)=>alert(err));
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>
                <button onClick={handleClick} className="btn btn-danger d-block mx-auto">Delete</button>
            </td>
        </tr>
    )
}