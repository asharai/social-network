import React from 'react';
import './SideContainer.css'
const SideContainer = (props) => {
    return (
        <div className="sideContainer">
            <h4 className="sideContainer__title">{props.title}</h4>
            <div className={props.needPadding ? "sideContainer__content":''}>
                {props.children}
            </div>
        </div>
    );



};

export default SideContainer;