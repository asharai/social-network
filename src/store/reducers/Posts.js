const initialState = {
   posts:[],
  
};
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
            let idx = state.posts.findIndex(item=>item.id==action.id)
            return{
                ...state,
                posts: state.posts.slice(0,idx).concat(state.posts.slice(idx+1))
            }
        case 'ADD_COMMENT':
            let id = state.posts.findIndex(item=>item.id==action.id);
            let newPosts = [...state.posts];
            newPosts[id].comments.push(action.comment)
            return{
                ...state,
                posts: newPosts
            }
        default:
            return state;
    }
}
export default reducer;