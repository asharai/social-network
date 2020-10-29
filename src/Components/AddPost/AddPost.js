import React from 'react';
import './AddPost.css'
const AddPost = () => {
    return (
        <div className="addPost">
            <div className="addPost__container">
            <textarea type="text" name="" className="addPost__input" ></textarea>
            <button className="addPost__btn">Create post</button>
            </div>
        </div>
    );
};

export default AddPost;