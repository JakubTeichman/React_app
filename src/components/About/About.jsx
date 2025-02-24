import React, {useState} from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-main">
            <div className="me">
            <h1 className="about" id="about">ABOUT</h1>
            <div className="about">
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, fugiat error a voluptatibus sed modi est deleniti ipsum laboriosam dignissimos necessitatibus tempora quae officiis dolores vel, iste unde deserunt quibusdam?</p>
                </div>
            </div>
        </div>
            <h1>SKILLS</h1>
            <h2>Machine learing and data analisis</h2>
            <div className="skills">
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="" />
                            <p>Python</p>   
                        </li>
                        <li>
                            <img src="https://static-00.iconduck.com/assets.00/file-type-numpy-icon-1901x2048-oulkqypt.png" alt="" />
                            <p>Numpy</p>
                        </li>
                        <li>
                            <img src="https://cdn.worldvectorlogo.com/logos/pandas.svg" alt="" />
                            <p>Pandas</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/640px-Scikit_learn_logo_small.svg.png" alt="" />
                            <p>SciKit-learn</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png" alt="" />
                            <p>Matplolib</p>
                        </li>
                    </ul>
                </div>
                <h2>Programming</h2>
                <div className="skills">
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png" alt="" />
                            <p>C#</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png" alt="" />
                            <p>SQL</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />
                            <p>HTML</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" />
                            <p>CSS</p>
                        </li>
                        <li>
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
                            <p>React</p>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default About;