
function MyFun(props){
  
    return(
        <div style={{backgroundColor:props.col,height:"700px"}}>
            Hello From MyFun{}
            <h1>Hello This Page is Made For {props.name} </h1>
            <h2>Subscribed channel   {props.channel} </h2>

        </div>
    )
}
export default MyFun;