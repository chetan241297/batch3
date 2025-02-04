import React, {Component} from "react";
class MyClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            s : "ashu"
        }
    }
    change(){
        this.setState({s:"Nikhil"});
    }
    render(){
        return(
        <div  style={{backgroundColor:this.props.col,height:"700px"}}>
             Hello From MyFun{}
            <h1>Hello From MyClass {this.props.name} </h1>
            <h2>Subscribed channel   {this.props.channel} </h2>
            <h1>Hello {this.state.s} </h1>
            <button  style={{ marginBottom: '20px' }} onClick={()=>{this.change()}}>change</button>
        </div>
        )
    }

}
export default MyClass;