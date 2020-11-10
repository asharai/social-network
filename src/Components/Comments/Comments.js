import React from 'react';
import Comment from "./Comment/Comment";
import './Comments.css'
import AddComment from "../AddComent/Add Comment";
import {connect} from "react-redux";
const Comments = ({open,idx,posts}) => {


   const commentBlock =  posts[posts?.findIndex(item=>item.id===idx)].comments.map(item=>{
       console.log(item)
       return  <Comment text={item.text} likes={item.likes} name={item.profile} time={item.date} idx={item.id}/>

   })

    return (
    <div className={open ? 'comments open' : 'comments'}>
         <ul className="comments__list" >
             {commentBlock}
        </ul>
        <AddComment idx={idx}/>
    </div>
    );
};
const mapStateToProps = state => {
    return {
        posts:state.posts

    };
}

export default connect(mapStateToProps,null)(Comments)