import React from 'react';
import './Comment.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {getPostTime} from "../../../store/reducers/Posts";

const Comment = ({idx,text,time,name,likes,img}) => {
    let date = getPostTime(time);
    return (
        <li  className="comment">
            <article key={idx} className="comment__article">
                <div className="comment__info">
                    <div className="comment__infoPerson">
                        <img src={img} className="comment__infoPersonImg" alt=""/>
                        <hgroup>
                            <h4 className="comment__infoName">{name}</h4>
                            <h6 className="comment__infoDate">{date}</h6>
                        </hgroup>
                    </div>
                </div>
                <p className="comment__text">{text}</p>
                <div className="comment__feed ">
                    <a  className="comment__feedLikes post__feedItem"> <FavoriteBorderIcon/> <span>{likes}</span></a>
                </div>
            </article>
        </li>
    );
};

export default Comment;