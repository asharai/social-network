import React from 'react';
import './Post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ReplyIcon from '@material-ui/icons/Reply';
const Post = () => {
    return (
        <div className="post">
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
            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at debitis dignissimos dolorem doloribus ea eius excepturi expedita obcaecati odio, omnis reprehenderit tempore veniam. Architecto assumenda commodi cum cupiditate delectus deserunt dolore doloribus, eligendi, impedit labore magni, minima necessitatibus quia.</p>
            <div className="post__feed ">
                <a  className="post__feedLikes post__feedItem"> <FavoriteBorderIcon/> <span>8</span></a>
                <div className="post__feedShare">
                    <a className="post___feedShare__count post__feedItem"> <MessageIcon/> <span>17</span> </a>
                    <a className="post___feedShare__count post__feedItem"> <ReplyIcon/>    <span>24</span> </a>
                </div>

            </div>
        </div>
    );
};

export default Post;