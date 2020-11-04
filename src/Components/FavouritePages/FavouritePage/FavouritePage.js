import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './FavouritePage.css'
const FavouritePage = ({id,img,title,group}) => {
    return (
        <li className="favouritePage" key={id}>
            <div className="favouritePage__container">

                <img src={img} alt="" className="favouritePage__img"/>
                <div className="favouritePage__info">
                    <h5 className="favouritePage__title">{title}</h5>
                    <p className="favouritePage__description">{group}</p>
                </div>
                <span className="favouritePage__add"><StarBorderIcon/></span>
            </div>
        </li>
    );
};

export default FavouritePage;