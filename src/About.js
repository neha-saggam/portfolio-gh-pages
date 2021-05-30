import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import profile from "./profile.jpeg";
import React from "react";

export const About = () => {
    return (
        <section id="about" className="d-flex row justify-content-center section">
            <div className="col-5">
                <img src={profile} className="App-logo" alt="logo" />
            </div>
            <div className="col-5">
                <h1>Neha Saggam</h1>
                <p>
                    Hello, I'm a Applications Developer, based in Pune, India.
                </p>
                <p>
                    I strive towards growth and excellence.<br />
                    Always challenging myself to learn new things by wearing various hats in a project.
                </p>
                <p>Let's talk more via the form below, or emailing <a href="mailto:nehasaggam@gmail.com">neha@gmail.com</a></p>
                <form name="lets-talk-email-form" action="mailto:nehasaggam@gmail.com" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="Enter Email address" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    )
}
