import axios from '../../axios-posts';
export const setPosts = (posts)=>{
    return{
        type:'SET_POSTS',
        posts:posts,

    }
}
export const switchLikes = id =>{
    return{
        type: 'ADD_LIKE_POST',
        id:id
    }
}
export const unlike = id =>{
    return{
        type: 'REMOVE_LIKE_POST',
        id:id
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
export const addedComment = (id,comment) =>{
    return {
        type:'ADD_COMMENT',
        id:id,
        comment:comment
    }
}
export const newPost = ()=>{
    return{
        type: 'NEW_POST'
    }
}
export const getPosts = ()=>{
    return dispatch =>{
        axios.get('https://social-network-956c5.firebaseio.com/posts.json')
            .then(response => {
                let fetchedOrders = [];
                let fetchedComments=[];
                for(let key in response.data){
                    for(let k in response.data[key].comments){
                    fetchedComments.push(response.data[key].comments[k])
                        console.log(fetchedComments)
                    }

                    fetchedOrders.push({...response.data[key]})

                }
                fetchedOrders.forEach(item=>{
                    let arr = []
                    for(let keys in item.comments){
                        arr.push(item.comments[keys]);
                    }
                    item.comments = arr;
                })
                console.log(fetchedOrders)
                dispatch(setPosts(fetchedOrders))
            })
            .catch(error => {
             console.log(error)
            })
    }
}
export const addPost = (post) =>{
let idx = post.id;
    return dispatch =>{
        axios.put(`https://social-network-956c5.firebaseio.com/posts/${idx}.json`, {...post})
            .then(response => {
                dispatch(addedPost(post))
            })
            .catch(error => {
              console.log(error)
            })
    }
}
export const addComment = (id,comment) =>{
    return dispatch =>{
        axios.post(`https://social-network-956c5.firebaseio.com/posts/${id}/comments.json`, {...comment})
            .then(response => {

                dispatch(addedComment(id,comment))

            })
            .catch(error => {
                console.log(error)
            })
    }
}
export const deletePost = (id)=>{
    return dispatch =>{
        axios.delete(`https://social-network-956c5.firebaseio.com/posts/${id}.json`)
            .then(res=>{
            dispatch(deletedPost(id))
        })
            .catch(err=>console.log(err))
    }
}
export const removeNewPost = id =>{
    return dispatch =>{
        axios.delete(`https://social-network-956c5.firebaseio.com/posts/${id}/newPost.json`)
            .then(response => {

                dispatch(newPost(id))

            })
            .catch(error => {
                console.log(error)
            })
    }
}
export const likePost = (id,likes) =>{
   return dispatch =>{
         axios.put(`https://social-network-956c5.firebaseio.com/posts/${id}/liked.json`,true)
            .then(response => {
            })
            .catch(error => {
                console.log(error.response)
            })
       axios.put(`https://social-network-956c5.firebaseio.com/posts/${id}/likes.json`,likes+1).then(res=>  dispatch(switchLikes(id))).catch(err=>console.log(err.response));

    }
}
export const  unLikePost  =  (id,likes) =>{
    const like = likes-1;
    return  dispatch  => {
     axios.put(`https://social-network-956c5.firebaseio.com/posts/${id}/liked.json`,'false').then( response => {}).catch(err=>console.log(err.response));
     axios.put(`https://social-network-956c5.firebaseio.com/posts/${id}/likes.json`,like).then(res=>        dispatch(unlike(id))).catch(err=>console.log(err.response));


    }

}