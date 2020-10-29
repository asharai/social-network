import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import './ProfileIntro.css'
const ProfileIntro = () => {
    return (
        <>
            <ul className="profileIntro__infoList">
                <li>
                    <h5>About Me:</h5>
                    <p>Hi, I’m John, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.</p>
                </li>
                <li>
                    <h5>Favourite TV Shows:</h5>
                    <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
                </li>
                <li>
                    <h5>Favourite Music Bands / Artists:</h5>
                    <p>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</p>
                </li>
            </ul>
            <h5>Other Social Networks:</h5>
            <ul className="profileIntro__linksList">
                <li className="profileIntro__linksItem profileIntro__linksItemFacebook"><a href=""><FacebookIcon/></a></li>
                <li className="profileIntro__linksItem profileIntro__linksItemTwitter"><a href=""> <TwitterIcon/></a></li>
                <li className="profileIntro__linksItem profileIntro__linksItemGithub"><a href=""><GitHubIcon/></a></li>
            </ul>
        </>
    );
};

export default ProfileIntro;