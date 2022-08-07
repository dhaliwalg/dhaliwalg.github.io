import React, { Component } from "react";
import ImageFadeIn from "react-image-fade-in";
import Typewriter from "typewriter-effect";

import { FooterBar } from '../components/FooterBar';

class Landing extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <ImageFadeIn opacityTransition='5' src='https://raw.githubusercontent.com/dhaliwalg/dhaliwalg.github.io/master/site/profpic.jpg' className="App-logo" alt="logo" />
                </header>

                <div className='typer'>
                    <Typewriter onInit={(typewriter) => {
                        typewriter

                            .typeString("hi i'm gurjit")
                            .pauseFor(4000)
                            .typeString(" ਗੁਰਜੀਤ")
                            .pauseFor(3000)
                            .deleteAll()
                            .typeString("striving to set an example for the sikh youth")
                            .start();
                    }}
                    />
                </div>

                <FooterBar className="App-logo-spin" />
            </div>
        );
    }
}

export default Landing;