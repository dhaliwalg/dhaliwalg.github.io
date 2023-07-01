import React, { Component } from "react";
import { FooterBar } from "../components/FooterBar";
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.JPG'

class About extends Component {
    render() {
        return (
            <div className="App-header">
                <div className="aboot">
                    <p>hi again! my name is gurjit dhaliwal, i graduated from UMD - College Park in 2023 w/ my b.s. in computer science.</p>
                    <p>i also have a minor in philosophy & ethics!</p>
                    <p>i love to write: <a href="https://docs.google.com/document/d/17zug4PKgcrfvgj_hIXA3OZfc-oZI1b6ByWX3HxAsAW4/edit?usp=sharing">philosophical papers</a> and <a href="https://drive.google.com/file/d/1g9xZMXeNHKSs0KQI-lzM9UFyaiH-REpg/view?usp=share_link">short stories</a></p>
                    <p>other than writing, i love to partake in sports and any form of competitive activity. i'm currently competing in a traditional punjabi dance, known as bhangra.</p>
                </div>

                <div className="pics">
                    <img src={pic1} height={275} width={225} alt="me on stage" />&nbsp;&nbsp;
                    <img src={pic2} height={275} width={200} alt="me and friends" />&nbsp;&nbsp;
                    <img src={pic3} height={275} width={225} alt="me jumping" />

                </div>

                <p>watch our second place performance at bhangra blowout!</p>

                <div className="video">
                    <iframe width="500" height="325" src="https://www.youtube.com/embed/9AcMdqgubUU" title="YouTube video player" frameborder="3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <FooterBar />
            </div>
        )
    }
}

export default About;