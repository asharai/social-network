import React, {useState} from 'react';
import './AddComent.css'
import * as postsActions from "../../store/actions/Posts";
import * as imageAcitons from '../../store/actions/Images'
import {connect} from "react-redux";

const AddComment = ({idx,onAddComment,onAddCommentToImg,imageComment}) => {
    const id = Date.now();
    const [text,setText]=useState();
    const comment = {
        text:text,
        likes:0,
        liked:false,
        id:id,
        date:Date.now(),
        profile:'John Doe',
        img:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
    }
    const addCommentToPost = (idx,comment)=>{
        if(imageComment){
            onAddCommentToImg(idx,comment)
        }
        else{
            onAddComment(idx,comment,id);
        }
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
        onAddComment: (idx,comment,idComment) => dispatch(postsActions.addComment(idx,comment,idComment)),
        onAddCommentToImg: (idx,comment) => dispatch(imageAcitons.addCommentToImg(idx,comment)),
    }
}
export default connect(null,mapDispatchToProps)(AddComment);