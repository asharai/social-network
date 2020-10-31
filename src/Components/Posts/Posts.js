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
        let arr = [];
        for(let key in posts){
            arr.push(posts[key])
        }
        return arr.map(item=>{
            return <Post  comments={18} text={item.text}  idx={item.id} shares={item.shares} />

        })
    }

    const post = createPost();

    return (
        <div>
            <AddPost/>
           {post}
        </div>
    );
};
const mapStateToProps = state => {
    return {
        posts: state.posts,

    };
}
const mapDispatchToProps = dispatch => {
    return {
        onGetPosts: () => dispatch(postsActions.getPosts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts);