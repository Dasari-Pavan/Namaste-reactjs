import { useState } from "react";

const User=({name})=>{
  
    const[count]=useState(0);
    const[count1]=useState(1);
  
    return(
        <div className="user-card">
            <h2>count={count}</h2>
            <h2>count={count1}</h2>
            <h2>{name}</h2>
            <h3>Location:Guntur</h3>
            <h4>contact:@pavankumar</h4>
        </div>
    );
};
export default User