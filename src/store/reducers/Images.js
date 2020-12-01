const initialState={
    images:[
        {id:0,img:"https://images.unsplash.com/photo-1586985288123-2495f577c250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",comments:[
                {text:"Amazing",likes:0,id:1605764980040,date:1605764980040,profile: "Michael Maximoff",img:"https://images.unsplash.com/photo-1603243710242-cc5b72944f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"}
            ],date:1604652883662,likes:12,headerPhoto:'Pancake',likedImg:false},
        {id:1,img:"https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",comments:[],date:1604652883662,likes:13,headerPhoto:'Friends meetup',likedImg:false},
        {id:2,img:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",comments:[],date:1604652883662,likes:4,headerPhoto:'Coffee',likedImg:false},
        {id:3,img:"https://images.unsplash.com/photo-1433763472432-7970c9ba5349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",comments:[],date:1604652883662,likes:8,headerPhoto:'Low Town',likedImg:false},
        {id:4,img:"https://images.unsplash.com/photo-1587058680684-e0a315822a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",comments:[],date:1604652883662,likes:25,headerPhoto:'Mountain',likedImg:false},
        {id:5,img:"https://images.unsplash.com/photo-1569875770758-f17664dfe4f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",comments:[],date:1604652883662,likes:10,headerPhoto:'Fire',likedImg:false},
        {id:6,img:"https://images.unsplash.com/photo-1502404679462-d669245fc482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",comments:[],date:1604652883662,likes:4,headerPhoto:'Laptop',likedImg:false},
        {id:7,img:"https://images.unsplash.com/photo-1586534313131-8b27a31f9894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",comments:[],date:1604652883662,likes:7,headerPhoto:'Office',likedImg:false},
        {id:8,img:"https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",comments:[],date:1604652883662,likes:12,headerPhoto:'Working',likedImg:false},
    ],
    idImg:0
}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'NEXT_IMG':
            if(state.idImg+1>state.images[state.images.length-1].id){
                return {
                    ...state,
                    idImg: 0
                };
            }
            return {
                ...state,
                idImg: state.idImg+1
            };
        case 'PREV_IMG':
            if(state.idImg==0){
                return{
                    ...state,
                    idImg: state.images[state.images.length-1].id
                }
            }
            return {
                ...state,
                idImg: state.idImg-1
            };
        case 'SET_ID_IMG':
            return{
                ...state,
                idImg: action.id
            }
        case 'ADD_COMMENT_IMG':
            let idImage = state.images.findIndex(item=>item.id===action.id);
            let newImages = [...state.images];
            newImages[idImage].comments = newImages[idImage].comments.concat( action.comment);
            return{
                ...state,
                images: newImages
            }
        case 'ADD_LIKE_TO_IMG':
            let ind = state.images.findIndex(item=>item.id===action.id);
            let newImagesLike = [...state.images];
            newImagesLike[ind].likes =  newImagesLike[ind].likes+1
            newImagesLike[ind].likedImg = true;
            return{
                ...state,
                images: newImagesLike
            }
        case 'REMOVE_LIKE_IMG':
            let indLike = state.images.findIndex(item=>item.id===action.id);
            let newImagesUnlike = [...state.images];
            newImagesUnlike[indLike].likedImg = false;
            newImagesUnlike[indLike].likes =  newImagesUnlike[indLike].likes-1;
            return{
                ...state,
                images: newImagesUnlike
            }
        default:
            return state;
    }
}
export default reducer;