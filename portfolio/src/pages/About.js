import React, { Component } from "react";
import { FooterBar } from "../components/FooterBar";
import pic3 from './imgs/pic3.JPG';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="App">
                <div className="aboot">
                    <p>hi again! my name is gurjit dhaliwal, i graduated from UMD - College Park in 2023 w/ my b.s. in computer science.</p>
                    <p>i also have a minor in philosophy & ethics!</p>
                    <p>i love to write: <a href="https://docs.google.com/document/d/17zug4PKgcrfvgj_hIXA3OZfc-oZI1b6ByWX3HxAsAW4/edit?usp=sharing">philosophical papers</a> and <a href="https://drive.google.com/file/d/1g9xZMXeNHKSs0KQI-lzM9UFyaiH-REpg/view?usp=share_link">short stories</a></p>
                    <p>other than writing, i love to partake in sports and any form of competitive activity. i'm currently competing in a traditional punjabi dance, known as bhangra.</p>



                    <div className="pics">
                        <img src={pic3} height={'255vmin'} width={'225vmin'} alt="me jumping" />
                    </div>
                </div>
                <FooterBar />
            </div>
        )
    }
}

export default About;