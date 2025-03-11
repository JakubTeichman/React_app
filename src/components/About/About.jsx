import React, {useState} from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-main">
            <div className="me">
            <h1 className="about" id="about">ABOUT</h1>
            <div className="about">
                <div>
                    <p>I'm an ambitious and motivated student at AGH University of Science and Technology, 
                        passionate about <b>cybersecurity</b>, <b>data analysis</b>, and <b>machine learning</b>. 
                        Constantly developing my skills in programming, digital forensics, and AI-driven 
                        security solutions. Eager to gain hands-on experience through an <b>internship</b> in 
                        cybersecurity or data science. Open to collaboration and always 
                        looking for new challenges!</p>
                </div>
            </div>
        </div>
            <h1>SKILLS</h1>
            <h2>Machine learning</h2>
            <div className="me">
                <div className="about">
                    <div>
                        <p>
                        I am currently taking a <b>machine learning and data analysis course</b> as part of my studies, as well as an additional Udemy course on this topic. Through this, I have gained hands-on experience with various tools for <b></b>building and evaluating machine learning models.
                        </p>
                    </div>
                    </div>
            </div>
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" alt="" />
                            <p>TensorFlow</p>
                        </li>
                    </ul>
                </div>
                <h2>Data analisys and visualization</h2>
                <div className="me">
                <div className="about">
                    <div>
                        <p>
                        During my internship at <b>Balice Airport</b>, I gained hands-on experience using <b>Excel</b> for planning and managing the allocation of centralized infrastructure. I was responsible for daily capacity reports, ensuring efficient infrastructure usage, and collecting data for KPI reports.  

Currently, I am expanding my skills by learning <b>Power BI</b> to create <b>interactive reports and data visualizations</b>, further enhancing my ability to analyze and present data effectively.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="skills">
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png" alt="" />
                            <p>Matplolib</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/2560px-Sql_data_base_with_logo.svg.png" alt="" />
                            <p>SQL</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/814px-Microsoft_Excel_2013-2019_logo.svg.png" alt="" />
                            <p>Excel</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png" alt="" />
                            <p>Power BI</p>
                        </li>
                    </ul>
                </div>

                <h2>Programing</h2>
                <div className="me">
                <div className="about">
                    <div>
                        <p>
                        During my studies, I gained practical experience with various programming languages, including <b>C#</b>, which allowed me to understand <b>object-oriented programming (OOP)</b> principles and the SOLID principles.  

I also explored <b>web development</b>, working with <b>HTML, CSS, JavaScript, and Bootstrap</b> to create responsive web applications. Currently, I am expanding my skills by learning <b>React</b> to build modern, dynamic user interfaces.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="skills">
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png" alt="" />
                            <p>C#</p>
                        </li>
                        <li>
                            <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/flask-qvsfwhwywucb6zv0d7ce.png/flask-1byb2jlw6nwim4nx2248xg.png?_a=DAJFJtWIZAAC" alt="" />
                            <p>Flask</p>
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