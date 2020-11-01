const initialState = {
   posts:[],
    loading:false
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
                loading:true,
                posts:state.posts.concat(action.post)
            };
        default:
            return state;
    }
}
export default reducer;