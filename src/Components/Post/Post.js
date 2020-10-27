import React from 'react';
import './Post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const Post = () => {
    return (
        <div className="post">
            <div className="post__info">
                <div className="post__infoPerson">
                    <img src="" alt=""/>
                   <hgroup>
                       <h4 className="post__infoName">John Doe</h4>
                       <h6 className="post__infoDate">19 hours ago</h6>
                   </hgroup>
                </div>
                <MoreHorizIcon/>
            </div>
            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae eum fugiat hic ipsa, nihil optio sit tempore unde veritatis!</p>
            <div className="post__feed">
               <ul className="post__feedLikes">
                   <li> <i> &#10084;</i></li>
               </ul>
                <div className="post__feedShare">
                    <p className="post___feedShare__count"> <i></i> 17 </p>
                    <p className="post___feedShare__count"> <i></i> 24 </p>
                </div>

            </div>
        </div>
    );
};

export default Post;