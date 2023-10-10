import '../App.css';
import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { IconContext } from "react-icons";
import { FiBox, FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

class FooterBar extends React.Component {
    render() {
        return (
            <IconContext.Provider value={{ color: "whitesmoke", className: "footerbar", size: "3vmax" }}>
                <div>
                    <a title="GitHub" href='https://github.com/dhaliwalg'><FiGithub className="icons" /></a>
                    <a title='Cydia Repo' href='cydia://url/https://cydia.saurik.com/api/share#?source=https://dhaliwalg.github.io/'><FiBox className="icons" /></a>
                    <a title="LinkedIn" href='https://www.linkedin.com/in/gurjit-dhaliwal/'><FiLinkedin className="icons" /></a>
                </div>
            </IconContext.Provider>

        )
    }
}

export { FooterBar }