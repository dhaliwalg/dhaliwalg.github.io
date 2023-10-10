import React, { Component } from "react";
import ImageFadeIn from "react-image-fade-in";
import Typewriter from "typewriter-effect";
import pfp from './imgs/option2.jpg';

import { FooterBar } from '../components/FooterBar';

class Landing extends Component {
    render() {
        return (
            <div className="App">

                <header className="App-header">
                    <ImageFadeIn opacityTransition='5' src={pfp} className="App-logo" alt="logo" />
                </header>

                <div className='typer'>
                    <Typewriter onInit={(typewriter) => {
                        typewriter
                            .typeString("hi i'm gurjit")
                            .pauseFor(8000)
                            .deleteAll()
                            .typeString("take a look around")
                            .pauseFor(5000)
                            .deleteAll()
                            .typeString("webpage built on react + typescript")
                            .start();
                    }}
                    />
                </div>

                <FooterBar />
            </div>
        );
    }
}

export default Landing;