import React from 'react';
import './Education.css';
const Education = () => {
    return (
        <ul className="education">
            <li className="education__item">
                <h5>The New College of Design:</h5>
                <span>2001-2006</span>

                <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
            </li>

            <li className="education__item">
                <h5>The Digital College:</h5>
                <span>2010</span>

                <p>6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.</p>
            </li>
            <li className="education__item">
                <h5>Rembrandt Institute:</h5>
                <span>2008</span>

                <p>Five months Digital Illustration course. Professor: Leonardo Stagg.</p>
            </li>

            <li className="education__item">
                <h5>UI/UX Designer:</h5>
                <span>2008-2013</span>

                <p>UI/UX Designer for the “Daydreams” agency.</p>
            </li>
            <li className="education__item">
                <h5>Digital Design Intern:</h5>
                <span>2006-2008</span>

                <p>Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.</p>
            </li>
            <li className="education__item">
                <h5>Senior UI/UX Designer:</h5>
                <span>2013-now</span>
                <p>Senior UI/UX Designer for the “Daydreams” agency. I’m in charge of a ten person group, overseeing all the proyects and talking to potential clients..</p>
            </li>

        </ul>
    );
};

export default Education;