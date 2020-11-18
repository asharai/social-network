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