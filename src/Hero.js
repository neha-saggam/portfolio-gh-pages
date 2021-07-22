import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import profile from "./profile.jpeg";

export const Hero = () => {
    return (
        <section id="home" className="d-flex row justify-content-center section">
            <div className="col-6">
                <h1>Hey, I'am Neha Saggam</h1>
                <div className="d-flex">
                <p>
                    A, Developer,
                </p>
                <p>
                     Singer,
                </p>
                <p>
                    Dream Traveller
                </p>
                </div>
                <div className="d-flex social-icons-container">
                    <a href="https://www.linkedin.com/in/nehasaggam/" target="_blank">
                        <span><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></span>
                    </a>
                    <a href="https://github.com/neha-saggam" target="_blank">
                        <span><FontAwesomeIcon icon={faGithub} size="lg" /></span>
                    </a>
                    <a href="mailto:nehasaggam@gmail.com">
                        <span><FontAwesomeIcon icon={faEnvelope} size="lg" /></span>
                    </a>
                    <a href="https://www.instagram.com/nehasaggam/">
                        <span><FontAwesomeIcon icon={faInstagram} size="lg" /></span>
                    </a>
                </div>
            </div>
            <div className="col-6">
                <img src={profile} className="App-logo" alt="logo" />
            </div>
        </section>
    )
}
