import React from "react";
import profilePic from "./images/profile.JPG";
import mail_logo from "./logos/Icon.png"
import linkedin_logo from "./logos/linkedin.png"

export default function Information(){
    return(
    <div className="my-profile">
        <img src= {profilePic} className="my-image" alt='image' />
        <div className="my-info">
            <h3 className="my-name">Harsh Chandani</h3>
            <p className="my-position">Front-End Developer</p>
            <p className="my-site">harshchandani/website</p>
        </div>
        <div className="connect-options">
            
                <a href="#" className="connect-email">
                    <img src = {mail_logo} className="mail-logo" />
                    <span className="mail-text">Email</span>
                </a>
                <a href="https://www.linkedin.com/in/hchandani/" target='blank' className="connect-linkedin">
                    <img src = {linkedin_logo} className="linkedin-logo"/>
                    <span className="linkedin-text">LinkedIn</span>
                </a>
            
        </div>
    </div>
    )
}