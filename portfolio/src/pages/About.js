import React, { Component } from "react";
import { FooterBar } from "../components/FooterBar";

class About extends Component{
    render(){
        return(
            <div className="App-header">
                <div className="aboot">
                <p>hi again! my name is gurjit dhaliwal, i'm a current senior at UMD - College Park.</p>
                <p>love to write: <a href="https://docs.google.com/document/d/17zug4PKgcrfvgj_hIXA3OZfc-oZI1b6ByWX3HxAsAW4/edit?usp=sharing">philosophical papers</a> and <a href="short stories">short stories</a></p>
                <p>other than writing, love to partake in sports and any form of competitive activity. currently competing in a traditional punjabi dance, known as bhangra.</p>
                <p>photos!</p>
                <img src=""></img>
                </div>
                <FooterBar/>
            </div>
        )
    }
}

export default About;