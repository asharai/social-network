export const setIdImg = (id)=>{
    return{
        type:'SET_ID_IMG',
        id:id,
    }
}
export const nextImg = ()=>{
    return{
        type:'NEXT_IMG',
    }
}
export const  prevImg = ()=>{
    return{
        type:'PREV_IMG',
    }
}
export const addCommentToImg=(id,comment)=>{
    return{
        type:'ADD_COMMENT_IMG',
        id:id,
        comment:comment
    }
}
export const addLiketoImg = (id)=>{
    return{
        type:'ADD_LIKE_TO_IMG',
        id:id
    }
}
export const removeLikeImg = (id)=>{
    return {
        type:'REMOVE_LIKE_IMG',
        id:id
    }
}
export const addLikeToImgComment = (id,idComment,likes)=>{
    return {
        type:'ADD_LIKE_IMG_СOMMENT',
        id:id,
        idComment:idComment,
        likes:likes
    }
}
export const removeLikeImgComment =(id,idComment,likes)=>{
    return{
        type:'REMOVE_LIKE_IMG_СOMMENT',
        id:id,
        idComment:idComment,
        likes:likes
    }
}