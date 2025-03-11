import React, {useState} from "react";
import "./Info.css";

const Info = () => {
    return (
        <div className="about-main" id="cyber">
            <div className="me">
            <h1 className="about">CYBERSECURITY</h1>
            <div className="about">
                <div>
                    <p>During my studies in <b>Modern Technologies in Forensics</b>, I gained a strong foundation in <b>computer networks</b> and am now expanding my expertise in <b>network security</b>. I have also studied <b>information security</b> and contributed to implementing an <b>information security policy</b> for Balice Airport as an uni project.  
I have hands-on experience in <b>digital forensics</b> and have worked with tools such as <b>Autopsy</b> to conduct digital investigations, prepare <b>analytical reports</b> based on <b>operating system dumps</b>, and analyze EXIF data, RAM, and storage devices like USB drives. Throughout these investigations, I utilized <b>Linux</b>, <b>Bash scripting</b>, and various forensic methodologies.  
Additionally, I have completed the <b>Cisco "Introduction to Cybersecurity" course</b> and am currently participating in a <b>bootcamp on Ethical Hacking</b> on Udemy. My experience and education have given me a solid understanding of digital forensics and cybersecurity principles.
                    </p>
                </div>
            </div>
        </div>
            <h2></h2>
            <div className="skills">
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/2048px-Kali-dragon-icon.svg.png" alt="" />
                            <p>Kali Linux</p>   
                        </li>
                        <li>
                            <img src="https://avatars.githubusercontent.com/u/866922?v=4" alt="" />
                            <p>Autopsy</p>
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png" alt="" />
                            <p>Wireshark</p>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default Info;