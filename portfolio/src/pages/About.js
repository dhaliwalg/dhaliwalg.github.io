import React, { Component } from "react";
import { FooterBar } from "../components/FooterBar";

class About extends Component{
    render(){
        return(
            <div className="App-header">
                <p>name's gurjit</p>
                <p>wrote some phil papers (link them)</p>
                <p>interests?</p>
                <p>photos</p>
                <FooterBar/>
            </div>
        )
    }
}

export default About;