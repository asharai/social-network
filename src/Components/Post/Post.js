import React from 'react';
import './Post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ReplyIcon from '@material-ui/icons/Reply';
import * as postsActions from '../../store/actions/Posts';
import {connect} from 'react-redux';
const Post = ({shares,text,idx,comments,date,onDeletePost}) => {
    let data =((Date.now()- new Date(date)) / (60*1000)).toFixed();

    let time = ``;

    switch(true){
        case data < 1:
            time=`Less than minute ago`;
            break;
        case data < 60:
            time = `${data} minutes ago`;
            break;
        case data < 1440:
            time=`${(data/60).toFixed()} hours ago`;
            break;
        default:
            time = `More than ${(data/60/30).toFixed()} days ago`;
            break;
    };
    return (

        <article className="post" key={idx}>
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
                <a  className="post__feedLikes post__feedItem"> <FavoriteBorderIcon/> <span>8</span></a>
                <div className="post__feedShare">
                    <a className="post___feedShare__count post__feedItem"> <MessageIcon/> <span>{comments}</span> </a>
                    <a className="post___feedShare__count post__feedItem"> <ReplyIcon/>    <span>{shares}</span> </a>
                </div>

            </div>
        </article>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        onDeletePost: (id) => dispatch(postsActions.deletePost(id))
    }
}
export default connect(null,mapDispatchToProps)(Post);
