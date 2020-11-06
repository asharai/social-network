import React, {useState} from 'react';
import './AddComent.css'
import * as postsActions from "../../store/actions/Posts";
import {connect} from "react-redux";

const AddComment = ({idx,onAddComment}) => {
    const [text,setText]=useState();
    const comment = {
        text:text,
        likes:0,
        id:Date.now(),
        date:Date.now(),
        profile:'John Doe',
        img:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    }
    const addCommentToPost = (idx,comment)=>{
        onAddComment(idx,comment);
        setText('');
    }
    return (
        <div className="addComment">
           <div className="addComment__container">
                <div className="addComment__textContent">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="addComment__img" alt=""/>
                    <textarea name="" id="" value={text} onChange={(e)=>setText(e.target.value)} className="addComment__text"></textarea>
                </div>

               <button className="addComment__btn" onClick={()=>addCommentToPost(idx,comment)}>Post Comment</button>
           </div>
        </div>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        onAddComment: (idx,comment) => dispatch(postsActions.addComment(idx,comment))
    }
}
export default connect(null,mapDispatchToProps)(AddComment);