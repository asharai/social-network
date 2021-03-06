import React, {useState} from 'react';
import {connect} from "react-redux";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import * as imagesActions from '../../store/actions/Images';
import {makeStyles} from "@material-ui/core/styles";
import './Photos.css';
import Modal from "@material-ui/core/Modal";

import Post from "../Post/Post";

const Photos = ({images,idImg,onSetIdImg,onNextImg,onPrevImg,addLiketoImg,removeLikeImg,liked}) => {
    const [open=false,setOpen]=useState();
    const useStyles = makeStyles({
        root: {
            outline:'none',
           display:'flex',
            justifyContent:'center',

        },
        arrows:{
            color:'white',
            fontSize:'54px',
            cursor:'pointer',
            '&:hover':{
              color:'#ff5e3a'
    }
        }

    });
    const mainImage = images.map(item=>{
        return(
            <div className="modal__mainImage">
                <img  src={item.img} alt=""/>
                <article className="modal__post">
                <Post imageComment={true} commentsCount={item.comments.length}  liked={item.likedImg} text={item.text} likes={item.likes} key={`${item.id}`} idx={item.id} shares={item.shares} date={item.date} />
                </article>
            </div>
        )
    })
    const openModal =id=>{
        onSetIdImg(id);
        setOpen(true);
    }
    const classes = useStyles();
    const imgs= images.map(item=>{
        return(
            <li key={item.id}><div className="photos__overlay">
                <div onClick={()=>openModal(item.id)} className="photos__description">
                    <hgroup>
                        <h3>{item.headerPhoto}</h3>
                        <h6>1 Week ago</h6>
                    </hgroup>
                    <span className="photos__likesCount" >{item.likes}  <FavoriteBorderIcon/></span>
                </div>
            </div><img className="photos__img" src={item.img} alt=""/></li>
        )
    })
    return (
        <ul className="photos">
            {imgs}
            <Modal open={open} onClose={()=>setOpen(false)} className={classes.root} disableAutoFocus={true}>
                <div className="modal">

                    {mainImage[idImg]}
                <div className="modal__list">
                    <ArrowLeftIcon  onClick={()=>onPrevImg()} className={classes.arrows}/>
                    <ul>
                        {images.map(item=>{
                            return(<li key={item.id} className={idImg==item.id? "modal__listItem modal__listItemActive":"modal__listItem"}  onClick={()=>onSetIdImg(item.id)}>
                                <img className="modal__listImg" src={item.img}/>
                            </li>)
                        })}
                    </ul>
                    <ArrowRightIcon onClick={()=>onNextImg()} className={classes.arrows}/>
                </div>
                </div>
            </Modal>

        </ul>
    );
};
const mapStateToProps = state => {
    return {
        images: state.images.images,
        idImg:state.images.idImg
    };
}
const mapDispatchToProps = dispatch =>{
    return {
    onSetIdImg:(id)=> dispatch(imagesActions.setIdImg(id)),
    onNextImg:()=> dispatch(imagesActions.nextImg()),
    onPrevImg:()=> dispatch(imagesActions.prevImg()),
    onAddLike:(id)=> dispatch(imagesActions.addLiketoImg(id)),
    onRemoveLike:(id)=> dispatch(imagesActions.removeLikeImg(id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Photos);