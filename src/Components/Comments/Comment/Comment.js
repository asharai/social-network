import React from 'react';
import './Comment.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {getPostTime} from "../../../store/reducers/Posts";
import {connect} from 'react-redux';
import * as postActions from '../../../store/actions/Posts'
import * as imageActions from '../../../store/actions/Images'
const Comment = ({idx,text,time,name,likes,img,postID,onAddLikeToComment,onRemoveLikeComment,liked,onAddLikeToImgComment,onRemoveLikeImgComment}) => {
    let date = getPostTime(time);
    const likeCommentPost = ()=>{
        return liked ?onRemoveLikeComment(postID,idx,likes) :onAddLikeToComment(postID,idx,likes)
    }
    const likeCommentImage = ()=>{
        return liked ?onRemoveLikeImgComment(postID,idx,likes) :onAddLikeToImgComment(postID,idx,likes)
    }
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
                    <a  className="comment__feedLikes post__feedItem" style={liked===true ? {color:'#ff5e3a'}:null} onClick={()=>postID ? likeCommentPost() : likeCommentImage()}> <FavoriteBorderIcon/> <span>{likes}</span></a>
                </div>
            </article>
        </li>
    );
};
const mapDispatchToProps = dispatch =>{
    return {
        onAddLikeToComment:(id,idComment,likes)=>dispatch(postActions.likeComment(id,idComment,likes)),
        onAddLikeToImgComment:(id,idComment,likes)=>dispatch(imageActions.addLikeToImgComment(id,idComment,likes)),
        onRemoveLikeComment:(id,idComment,likes)=>dispatch(postActions.unlikeComment(id,idComment,likes)),
        onRemoveLikeImgComment:(id,idComment,likes)=>dispatch(imageActions.removeLikeImgComment(id,idComment,likes))
    }
}
export default  connect(null,mapDispatchToProps)(Comment);