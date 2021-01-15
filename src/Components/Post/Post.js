import React, {useEffect, useState} from 'react';
import './Post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ReplyIcon from '@material-ui/icons/Reply';
import * as postsActions from '../../store/actions/Posts';
import {connect} from 'react-redux';
import {getPostTime} from "../../store/reducers/Posts";
import Comments from "../Comments/Comments";
import * as imagesActions from "../../store/actions/Images";
const Post = ({shares,text,idx,commentsCount,date,onDeletePost,likes,imageComment,newPost,onNewPost,onSwitchLikes,liked,onRemoveLike,onAddLikePhoto,onRemoveLikePhoto}) => {
    let [openComments = false,setOpenComments] = useState();

    useEffect(()=>{
     setTimeout(()=>onNewPost(idx),4000)
    },[])
    let time = getPostTime(date);
    const likesToPost = ()=>{

      return  liked ===true ? onRemoveLike(idx,likes):onSwitchLikes(idx,likes)
    }
    const likesToPhoto = ()=>{
        return  liked === true ? onRemoveLikePhoto(idx) :  onAddLikePhoto(idx);
    }
    return (

        <article className={newPost ? 'post newPostItem' : "post"} >
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

                            <li key="1" className="post__descrLink" onClick={()=>onDeletePost(idx)}>Delete post</li>

                        </ul>
                    </div>
                </div>

            </div>
            <p className="post__text">{text}</p>
            <div className="post__feed ">
                <a  className="post__feedLikes post__feedItem" style={liked ? {color:'#ff5e3a'}:null} onClick={()=>imageComment ? likesToPhoto():likesToPost()}> <FavoriteBorderIcon /> <span>{likes}</span></a>
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
        onDeletePost: (id) => dispatch(postsActions.deletePost(id)),
        onNewPost: (id)=>dispatch(postsActions.removeNewPost(id)),
        onSwitchLikes:(id,likes)=>dispatch(postsActions.likePost(id,likes)),
        onRemoveLike:(id,likes)=>dispatch(postsActions.unLikePost(id,likes)),
        onAddLikePhoto:(id)=> dispatch(imagesActions.addLiketoImg(id)),
        onRemoveLikePhoto:(id)=> dispatch(imagesActions.removeLikeImg(id)),
    }
}
export default connect(null,mapDispatchToProps)(Post);
