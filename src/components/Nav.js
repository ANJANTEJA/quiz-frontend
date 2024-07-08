import {Link} from "react-router-dom";
export default function Nav(){
    return(
        <nav className="navbar bg-warning">
            <Link to="/" className="navbar-brand mx-3">Online QUIZ!</Link>
            <div className="nav mx-5">
                <Link to="/Register" className="nav-link text-light fw-bolder btn btn-dark">Sign Up</Link>
                <Link to="/Login"  className="nav-link text-light fw-bolder btn btn-dark">Login In</Link>
                <Link to="/Admin"  className="nav-link text-light fw-bolder btn btn-dark">Admin</Link>
            </div>
        </nav>
    )
}