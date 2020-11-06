import React, {useState} from 'react';
import './AddPost.css';
import {connect} from 'react-redux'
import * as postsActions from "../../store/actions/Posts";
const AddPost = ({onGetPosts}) => {
    const [text='',setText] = useState();
    const sendPost = (post)=>{
        onGetPosts(post);
        setText('')
    }
    const post = {
        text:text,
              likes:0,
        shares:0,
        id:Date.now(),
        date:Date.now(),
        comments:[]
    }
    return (
        <div className="addPost">
            <div className="addPost__container">
            <textarea name="addPostText" className="addPost__input" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
            <button className="addPost__btn" onClick={()=>sendPost(post)}  disabled={!(text.length>0)}>Create post</button>
            </div>
        </div>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        onGetPosts: (post) => dispatch(postsActions.addPost(post))
    }
}

export default connect(null,mapDispatchToProps)(AddPost);