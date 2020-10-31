import React from 'react';
import './Post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ReplyIcon from '@material-ui/icons/Reply';
const Post = ({shares,text,idx,comments}) => {
    return (
        <div className="post" key={idx}>
            <div className="post__info">
                <div className="post__infoPerson">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="post__infoPersonImg" alt=""/>
                   <hgroup>
                       <h4 className="post__infoName">John Doe</h4>
                       <h6 className="post__infoDate">19 hours ago</h6>
                   </hgroup>
                </div>
                <MoreHorizIcon/>
            </div>
            <p className="post__text">{text}</p>
            <div className="post__feed ">
                <a  className="post__feedLikes post__feedItem"> <FavoriteBorderIcon/> <span>8</span></a>
                <div className="post__feedShare">
                    <a className="post___feedShare__count post__feedItem"> <MessageIcon/> <span>{comments}</span> </a>
                    <a className="post___feedShare__count post__feedItem"> <ReplyIcon/>    <span>{shares}</span> </a>
                </div>

            </div>
        </div>
    );
};

export default Post;