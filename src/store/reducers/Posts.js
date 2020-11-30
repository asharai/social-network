const initialState = {
   posts:[],
  
};
export const getPostTime = date =>{
    let data =((Date.now()- new Date(date)) / (60*1000)).toFixed();
    let time = ``;
    switch(true){
        case data < 1:
            return time=`Less than minute ago`;
            break;
        case data < 60:
            return  time = `${data} minutes ago`;
            break;
        case data < 1440:
            return time=`${(data/60).toFixed()} hours ago`;
            break;
        default:
          return   time = `More than ${(data/60/30).toFixed()} days ago`;
            break;
    };
}
const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.posts
            };
        case 'ADD_POST':
            return {
                ...state,
                posts:state.posts.concat(action.post)
            };
        case 'DELETE_POST':
            let idx = state.posts.findIndex(item=>item.id===action.id)
            return{
                ...state,
                posts: state.posts.slice(0,idx).concat(state.posts.slice(idx+1))
            }
        case 'ADD_COMMENT':
            let id = state.posts.findIndex(item=>item.id===action.id);
            let newPosts = [...state.posts];
            newPosts[id].comments = newPosts[id].comments.concat( action.comment);
            return{
                ...state,
                posts: newPosts
            }
        case 'NEW_POST':
            let newPost = [...state.posts];
            newPost[newPost.length-1].newPost = false;
            return{
                ...state,
                posts: newPost
            }
        case 'ADD_LIKE_POST':
            let ind = state.posts.findIndex(item=>item.id===action.id);
            let newPostsLike = [...state.posts];
            newPostsLike[ind].likes =  newPostsLike[ind].likes+1
            newPostsLike[ind].liked = true;
            return{
                ...state,
                posts: newPostsLike
            }
        case 'REMOVE_LIKE_POST':
            let indLike = state.posts.findIndex(item=>item.id===action.id);
            let newPostsUnlike = [...state.posts];
            newPostsUnlike[indLike].liked = false;
            newPostsUnlike[indLike].likes =  newPostsUnlike[indLike].likes-1

            return{
                ...state,
                posts: newPostsUnlike
            }
        default:
            return state;
    }
}
export default reducer;