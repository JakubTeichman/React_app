import React, {useState} from "react";
import "./Credits.css";

const Credits = () => {
    return (
        <div className="about-main">
            <div className="me">
            <h1 className="about" id="about">MORE INFO</h1>
            <div className="about">
                <div>
                    <p>You can find more information about me on my <b>LinkedIn profile</b>, and details of my projects and Power BI reports on my <b>GitHub</b>.</p>
                </div>
            </div>
            </div>
            <div className="credits">
                    <ul>
                        <li>
                            <a href="https://github.com/JakubTeichman">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
                            </a>
                            <p>GitHub</p>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jakub-teichman-ba0a0224a/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="" />
                            </a>
                            <p>LinkedIn</p>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default Credits;