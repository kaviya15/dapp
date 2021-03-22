import React, { Component } from "react";
import axios from "axios"; 
import {ContextCreator} from './Context'
class Navbar extends Component {
  render() {
    return (
      <ContextCreator.Consumer>
        {(context)=>{
          console.log(context)
          return(
            <div style={{backgroundColor:"darkgrey"}}>
            <h1>
            <img width="120px" className="pr-5" src="/vote.png" /> <b>Decentralized Voting</b> <img width="130px" className="pl-5" src="/election.png" />
        </h1>
      </div>
          )
        }}
      </ContextCreator.Consumer>
      
    );
  }
}

export default Navbar;
