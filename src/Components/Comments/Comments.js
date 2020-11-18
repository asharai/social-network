import React from 'react';
import Comment from "./Comment/Comment";
import './Comments.css'
import AddComment from "../AddComent/Add Comment";
import {connect} from "react-redux";
const Comments = ({open,idx,posts,images,imageComment}) => {

const prop = imageComment ? images : posts;
   const commentBlock =  prop[prop?.findIndex(item=>item.id===idx)].comments.map(item=>{

       return  <Comment text={item.text} likes={item.likes} name={item.profile} time={item.date} idx={item.id}/>

   })

    return (
    <div className={open ? 'comments open' : 'comments'}>
         <ul className="comments__list" >
             {commentBlock}
        </ul>
        <AddComment imageComment={imageComment} idx={idx}/>
    </div>
    );
};
const mapStateToProps = state => {
    return {
        posts:state.posts.posts,
        images:state.images.images

    };
}

export default connect(mapStateToProps,null)(Comments)