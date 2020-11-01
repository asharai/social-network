import React, {useState} from 'react';
import './AddPost.css';
import {connect} from 'react-redux'
import * as postsActions from "../../store/actions/Posts";
const AddPost = ({onGetPosts}) => {
    const [text,setText] = useState();
    const post = {
        text:text,
        comments:{},
        likes:0,
        shares:0,
        id:Date.now() + Math.random() * 10
    }
    return (
        <div className="addPost">
            <div className="addPost__container">
            <textarea type="text" name="" className="addPost__input" value={text} onChange={(e)=>setText(e.target.value)}></textarea>
            <button className="addPost__btn" onClick={()=>onGetPosts(post)}>Create post</button>
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