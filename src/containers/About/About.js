import React from 'react';
import SideContainer from "../SideContainer/SideContainer";
import './About.css';
import Hobbies from "../../Components/Hobbies/Hobbies";
import Education from "../../Components/Education/Education";
import PersonalInfo from "../../Components/PersonalInfo/PersonalInfo";
const About = () => {
    return (
        <div className="about">
            <SideContainer title="Personal Info" needPadding>
                <PersonalInfo/>
            </SideContainer>
            <div className="about__container">
                <SideContainer  title="Hobbes and Interests" needPadding >
                    <Hobbies/>
                </SideContainer>
                <SideContainer title="Education and Employement" needPadding>
                    <Education/>
                </SideContainer>
            </div>
        </div>
    );
};

export default About;