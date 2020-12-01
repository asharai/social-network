import React from 'react';
import Comment from "./Comment/Comment";
import './Comments.css'
import AddComment from "../AddComent/Add Comment";
import {connect} from "react-redux";
const Comments = ({open,idx,posts,images,imageComment}) => {

const prop = imageComment ? images : posts;
   const commentBlock =  prop[prop?.findIndex(item=>item.id===idx)].comments.map(item=>{

       return  <Comment liked={item.liked} postID = {idx} text={item.text} likes={item.likes} name={item.profile} time={item.date} key={item.id} idx={item.id} img={item.img ? item.img : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}/>

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