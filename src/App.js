import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Nav from "./components/Nav";
import {HashRouter,Routes,Route} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Admin from "./components/Admin";
function App() {
  return (
    <div className="container-fluid  p-0" >
        <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/quiz/:id" element={<Quiz/>} />
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
