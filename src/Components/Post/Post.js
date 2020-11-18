import React, {useState} from 'react';
import './Post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ReplyIcon from '@material-ui/icons/Reply';
import * as postsActions from '../../store/actions/Posts';
import {connect} from 'react-redux';
import {getPostTime} from "../../store/reducers/Posts";
import Comments from "../Comments/Comments";
const Post = ({shares,text,idx,commentsCount,date,onDeletePost,likes,imageComment}) => {
    let [openComments = false,setOpenComments] = useState();
    let time = getPostTime(date);
    return (

        <article className="post" key={idx}>
            <div className="post__container">
            <div className="post__info">
                <div className="post__infoPerson">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="post__infoPersonImg" alt=""/>
                   <hgroup>
                       <h4 className="post__infoName">John Doe</h4>
                       <h6 className="post__infoDate">{time}</h6>
                   </hgroup>

                </div>
                <div className="poster" >
                    <MoreHorizIcon   />
                    <div className="descr">
                        <ul>
                            <li className="post__descrLink">Edit post</li>
                            <li className="post__descrLink" onClick={()=>onDeletePost(idx)}>Delete post</li>

                        </ul>
                    </div>
                </div>

            </div>
            <p className="post__text">{text}</p>
            <div className="post__feed ">
                <a  className="post__feedLikes post__feedItem"> <FavoriteBorderIcon/> <span>{likes}</span></a>
                <div className="post__feedShare">
                    <a className="post___feedShare__count post__feedItem" onClick={()=>setOpenComments(!openComments)}> <MessageIcon/> <span>{commentsCount}</span> </a>
                    <a className="post___feedShare__count post__feedItem" > <ReplyIcon/>    <span>{shares}</span> </a>
                </div>

            </div>
            </div>
            <Comments open={openComments} imageComment={imageComment} idx={idx}/>
        </article>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        onDeletePost: (id) => dispatch(postsActions.deletePost(id))
    }
}
export default connect(null,mapDispatchToProps)(Post);
