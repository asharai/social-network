import React from 'react';

import './Sidebar.css';
const Sidebar = (props) => {
    return (
        <nav className={props.right ? "sidebar right":"sidebar"}>
            {props.children}
        </nav>
    );
};

export default Sidebar;