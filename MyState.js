import{useState} from "react";

function MyState(){
    var [x,setX]=useState(1);
    var fun =()=>{
        setX(5);
    }
    var[y,setx]=useState("ashu");
    var run=()=>{
        setx("nik");
    }
    var[o,set0]=useState({id:1,Name:"chetan",City:"pune"});
    var sun=()=>{
        set0({id:2,Name:"nikhil",City:"chikali"});
    }
    var [arr,seta]=useState(["chetan","Nikhil","Ashu"]);
    var mun=()=>{
        seta(["Ashu  ","chetan","Nikhil"]);
    }

    return(
        <div>
            <h1>{x}</h1>
            <button onClick={fun}>change</button>/

            <h1>{y}</h1>
            <button onClick={run}>change</button>

            <h1>{o.id}</h1>
            <h1>{o.City}</h1>
            <h1>{o.Name}</h1>
            <button onClick={sun}>change</button>

            <h1>{arr}</h1>
            <button onClick={mun}>change</button>
            
        </div>
    )
}

export default MyState;