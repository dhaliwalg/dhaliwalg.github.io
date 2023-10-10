import '../App.css';
import React from "react";
import { IconContext } from "react-icons";
import { FiBox, FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

class FooterBar extends React.Component {
    render() {
        return (
            <IconContext.Provider value={{ color: "whitesmoke", className: "footerbar", size: "2.5vmax" }}>
                <div>
                    <a title="GitHub" href='https://github.com/dhaliwalg'><FiGithub className="icons" /></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a title='Cydia Repo' href='cydia://url/https://cydia.saurik.com/api/share#?source=https://dhaliwalg.github.io/'><FiBox className="icons" /></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a title="LinkedIn" href='https://www.linkedin.com/in/gurjit-dhaliwal/'><FiLinkedin className="icons" /></a>
                </div>
            </IconContext.Provider>

        )
    }
}

export { FooterBar }