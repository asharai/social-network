import axios from '../../axios-posts';
export const setPosts = (posts)=>{
    return{
        type:'SET_POSTS',
        posts:posts
    }
}

export const getPosts = ()=>{
    return dispatch =>{
        axios.get('https://social-network-956c5.firebaseio.com/posts.json')
            .then(response => {
                dispatch(setPosts(response.data))
            })
            .catch(error => {
             console.log(error)
            })
    }
}