import React from "react";

export const About = () => {
    return (
        <section id="about" className="d-flex row justify-content-center section">
            <div className="section-title"><h2>About Me</h2></div>
            <div className="col-6">
                <h1>Neha Saggam</h1>
                <p>
                    Hello, I'm a Applications Developer, with 5 years of experience, based in Pune, India.
                </p>
                <p>
                    I am an approachable, friendly person.
                </p>
                <p>
                    I mostly worked on the front end technologies.
                    Recently, started working on AWS lambda and serverless framework.

                </p>
                <p>
                    When not working, I sing songs, read blogs and try to answer questions on stack overflow.
                </p>
                <p>Want to talk more, <a href="mailto:nehasaggam@gmail.com">Get in touch</a></p>
            </div>
        </section>
    )
}
