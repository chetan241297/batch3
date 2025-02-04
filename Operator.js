function Operators(){
    var a=30;
    var b= 30;
    var c= "chetan";
    return(
        <div>
            {a==b && <h1>Its true</h1>}
            {c || <h1>Its OR's output</h1>}
            {a==b ? <h1>Uts true T</h1> : <h1>Its false T</h1> }
        </div>
    )
}
export default Operators;