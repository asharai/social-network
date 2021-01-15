import React, {useEffect} from 'react';
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";
import './Posts.css';
import * as postsActions from '../../store/actions/Posts';
import {connect} from 'react-redux';
const Posts = ({onGetPosts,posts}) => {
    useEffect(()=>{
        onGetPosts();
    },[])

    const createPost = () =>{

        return posts.sort((a,b)=>b.date-a.date).map((item,i)=>{

            return <Post commentsCount={item.comments?.length} text={item.text} key={`${item.idx}`} likes={item.likes} liked={item.liked}  idx={item.id}    shares={item.shares} date={item.date} newPost={item.newPost}  />
        })
    }

    const post = createPost();
    return (
        <div className="posts" >
            <AddPost />
           {post}
        </div>
    );
};
const mapStateToProps = state => {
    return {
        posts: state.posts.posts


    };
}
const mapDispatchToProps = dispatch => {
    return {
        onGetPosts: () => dispatch(postsActions.getPosts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts);