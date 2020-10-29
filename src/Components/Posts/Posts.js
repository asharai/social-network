import React from 'react';
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";
import './Posts.css'
const Posts = () => {
    return (
        <div>
            <AddPost/>
            <Post/>
        </div>
    );
};

export default Posts;