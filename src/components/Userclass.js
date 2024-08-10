import { Component } from "react";
import React from "react";
class Userclass extends Component{
   constructor(props){
    super(props);
   
    this.state={
        Userinfo:{
            name:"hello",
            location:"hongkong",
        },
    };
    // console.log(this.props.name+"Child constructor");
   }
   
  async componentDidMount(){
    
    const data=await fetch("https://api.github.com/users/Dasari-Pavan");
    const json=await data.json();
    
    this.setState({
        Userinfo:json,
    });
    console.log(json);
}

componentDidUpdate(){
    console.log("component Did update");
}
componentWillUnmount(){
    console.log("component unmount");
}
    render()
    {
            const{name,location}=this?.state?.Userinfo;
        return(
            <div className="user-card">
                <h2>name:{name}</h2>
                <h3>location:{location}</h3>
                <h4>contact:@pavankumar</h4>
            </div>       
        )   
    }
}

export default Userclass