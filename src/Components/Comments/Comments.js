import React from 'react';
import Comment from "./Comment/Comment";
import './Comments.css'
import AddComment from "../AddComent/Add Comment";
const Comments = ({open}) => {
    return (
    <div className={open ? 'comments open' : 'comments'}>
         <ul className="comments__list" >
            <Comment text="awesome" name="Julian Rop" time={Date.now()} idx={1}/>
            <Comment text="hello world it's very nice" name="Julian Rop" time={Date.now()} idx={1}/>
        </ul>
        <AddComment/>
    </div>
    );
};

export default Comments;