import React from 'react';
import './BlogPost.css'
const BlogPost = ({title,text,date}) => {
    return (
        <article className="blogPost">
            <h2 className="blogPost__title">{title}</h2>
            <p className="blogPost__text">{text}</p>
            <p className="blogPost__date">{date}</p>
        </article>
    );
};

export default BlogPost;