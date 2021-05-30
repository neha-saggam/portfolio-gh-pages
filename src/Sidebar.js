import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCode, faGraduationCap, faHome, faMedal, faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <ul className="sidebar d-flex flex-column justify-content-center">
                <li>
                    <a href="#home"><FontAwesomeIcon icon={faHome} size="lg" />
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <FontAwesomeIcon icon={faBriefcase} size="lg" />
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <FontAwesomeIcon icon={faCode} size="lg" />
                    </a>
                </li>
                <li>
                    <a href="#education">
                        <FontAwesomeIcon icon={faGraduationCap} size="lg" />
                    </a>
                </li>

            </ul>
        </div>
    );
}
