
import './App.css';
import About from '/Componenets/About';
import Home from '/Componenets/Home';
 import Signin from '/Componenets/Signin';
 import Signup from '/Componenets/Signup';
import Navebar from '/Componenets/Navebar';
import {BrowserRouter,Routes,Route} from "react-router-dom";




function App() {

  return (
    <div >
     
      <BrowserRouter>
     <Navebar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
   
  );
}


export default App;
