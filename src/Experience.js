import React from "react";
import './Experience.css';

export const Experience = () => {
    return (
        <section id="experience" className="about">
            <div className="container">
                <div className="section-title"><h2>Experience</h2></div>
                <div className="container">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="timeline-title">Technogise Pvt. Ltd.</h4>
                                    <div className="text-muted"><time datetime="2018-10">Oct 2018 </time> - Present</div>
                                </div>
                                <div className="timeline-body">
                                    <p>I have ben working here as a Applications Developer.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-inverted">
                            <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="timeline-title">Hashmap Pvt Ltd.</h4>
                                    <div className="text-muted"><time datetime="2018-03">Mar 2018 </time> - <time
                                        dateTime="2018-09">Sep 2018 </time></div>
                                </div>
                                <div className="timeline-body">
                                    <p> I worked here as a front end developer.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card"></i>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4 className="timeline-title">GS Labs</h4>
                                    <div className="text-muted"><time datetime="2015-07"> Jul 2015 </time> - <time
                                        dateTime="2018-03"> Mar 2018 </time></div>
                                </div>
                                <div className="timeline-body">
                                    <p>I have worked here as a Software Developer</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
