import {useNavigate } from "react-router-dom";
import "./Navbar.css"

function Home (){
    var navigate = useNavigate();
    var fun = ()=> {
        navigate("/signin");
    }
    return(
        <div className= "com">
            <h1>Hello form home</h1>
            <button onclick={fun}>Signin</button>
        </div>
    )

}
export default Home;