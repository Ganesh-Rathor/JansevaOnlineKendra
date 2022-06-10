import React from 'react';
import "./about.css";

function about() {
  return (
    <div className="about">
        <div className="about-us">
            <h2>Know Me</h2>
            <div className="flex-2">
                {/* <i class="fa-solid fa-a fa-5x"></i> */ }
                <img src={require("../../images/Aashis.jpeg")} alt="" />
                <div className="detail">
                    <p className="name">Aashish Ahir</p>
                    <p>I am a CSC VLE (Govrt Common Service Center) I am from Baval Town of Neemuch District I done Higher Education 2011 And then I start Thise busness of Online Serving to Common people</p>
                    <p>My porepose is Give Common benifits of government to all the common peoples</p>
                    <p>contact me for more information  +919406858154</p>
                </div>
            </div>
        </div>
        <div className="about-me">
        <h2>Know The Web Developer</h2>
            <div className="flex-2">
                <i class="fa-solid fa-g fa-5x"></i>
                <div className="detail">
                    <p className="name">Ganesh Rathor</p>
                    <p>I am a web Developer (a Junior web Developer) I had the experience of 2 year in My <strong>Coding (Programming)</strong> carear </p>
                    <p className='skill'>My Skills</p>
                    <ul>
                        <li>HTML5(Hyper Text Markup Language)</li>
                        <li>css3 (Bootsrap)</li>
                        <li>Javascript Language</li>
                        <li>c++/c Programming </li>
                        <li>React js</li>
                        <li>Node js(express js)</li>
                        <li>Database in MongoDB (mongoose)</li>

                    </ul>
                    <p>Contact me for More Information <span className="name">9302196294</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about;