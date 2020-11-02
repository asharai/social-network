import axios from '../../axios-posts';
export const setPosts = (posts)=>{
    return{
        type:'SET_POSTS',
        posts:posts,

    }
}
export const addedPost = (post)=>{
    return{
        type:'ADD_POST',
        post:post
    }
}
export const deletedPost = (id)=>{
    return{
        type:'DELETE_POST',
        id:id
    }
}
export const getPosts = ()=>{
    return dispatch =>{
        axios.get('https://social-network-956c5.firebaseio.com/posts.json')
            .then(response => {
                let fetchedOrders = [];
                for(let key in response.data){
                    fetchedOrders.push(response.data[key])
                }
                dispatch(setPosts(fetchedOrders))
            })
            .catch(error => {
             console.log(error)
            })
    }
}
export const addPost = (post) =>{
    return dispatch =>{
        axios.post('https://social-network-956c5.firebaseio.com/posts.json', post)
            .then(response => {
                dispatch(addedPost(post))
            })
            .catch(error => {
              console.log(error)
            })
    }
}
export const deletePost = (id)=>{
    return dispatch =>{
        axios.delete('https://social-network-956c5.firebaseio.com/posts.json',{data:{id:id}})
            .then(res=>{
            dispatch(deletedPost(id))
        })
            .catch(err=>console.log(err))
    }
}
