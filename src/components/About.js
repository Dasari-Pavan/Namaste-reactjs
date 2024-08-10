import { Component } from "react";
import User from "./User";
import Userclass from "./Userclass";

class About extends Component{

    constructor(props){
        super(props);
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent componentDidMount");
    }
    render(){
        console.log("parent render")
    return(
        <div>
        <h1>About Page</h1>
        <h2>This is Namaste React web Series</h2>
        {/* <User name={"pavankumar DASARI"}/> */}
        <Userclass name={"First"} location={"Vijayawada"}/>
        {/* <Userclass name={"Second"} location={"Guntur"}/> */}
        </div>
    )
}
}
export default About;