import React from 'react';
import './PersonalInfo.css'
const PersonalInfo = () => {
    return (
        <ul className="personalInfo">
           <li  className="personalInfo__item">
               <h5>About Me:</h5>
               <p>Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56 </p>
           </li>
            <li  className="personalInfo__item">
                <h5>Birthday:</h5>
                <p>December 14th, 1984 </p>
            </li>
            <li  className="personalInfo__item">
                <h5>Birthplace: </h5>
                <p>Austin, Texas, USA</p>
            </li>
            <li  className="personalInfo__item">
                <h5>Lives in:</h5>
                <p>San Francisco, California, USA </p>
            </li>
            <li  className="personalInfo__item">
                <h5>Joined::</h5>
                <p>April 31st, 2014</p>
            </li>
            <li  className="personalInfo__item">
                <h5>Gender:</h5>
                <p>Male</p>
            </li>
            <li  className="personalInfo__item">
                <h5>Status:</h5>
                <p>Married</p>
            </li>
            <li  className="personalInfo__item">
                <h5>Email:</h5>
                <p>test@test123.ru</p>
            </li>
            <li  className="personalInfo__item">
                <h5>Website:</h5>
                <p>google.com</p>
            </li>
            <li  className="personalInfo__item">
                <h5>Phone:</h5>
                <p>(044) 555 - 4369 - 8957</p>
            </li>
            <li  className="personalInfo__item">
                <h5>Political Incline:</h5>
                <p>Democrat</p>
            </li>

        </ul>
    );
};

export default PersonalInfo;