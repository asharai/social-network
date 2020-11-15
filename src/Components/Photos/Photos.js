import React from 'react';
import {connect} from "react-redux";
import './Photos.css';
const Photos = ({images}) => {
    const imgs= images.map(item=>{
        return(
            <li key={item.id}><img className="photos__img" src={item.img} alt=""/></li>
        )
    })
    return (
        <ul className="photos">
            {imgs}
        </ul>
    );
};
const mapStateToProps = state => {
    return {
        images: state.images.images


    };
}
export default connect(mapStateToProps,null)(Photos);