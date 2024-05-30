import React from "react";
import tweet from './logos/TwitterIcon.png';
import fb from './logos/FacebookIcon.png';
import insta from './logos/InstagramIcon.png';
import git from './logos/GitHubIcon.png';
export default function Socials(){
    return(
        <div className="foot">
            <div className="social-sites">
                <div className="social-links">
                    <a href="#" type="button"><img src={tweet} alt='tweet_me'></img></a>
                    <a href="#" type="button"><img src={fb} alt='friend_me'></img></a>
                    <a href="#" type="button"><img src={insta} alt='follow_me'></img></a>
                    <a href="#" type="button"><img src={git} alt='work_with_me'></img></a>
                </div>
            </div>
        </div>
    )
}