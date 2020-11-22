import React, {useState} from 'react';
import Video from "../Video/Video";
import './Videos.css'
import {Modal} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

import {connect} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import * as videoActions from "../../store/actions/Videos";

const Videos = ({videos,idVideo,modalVideo,onChangeModal}) => {

    const useStyles = makeStyles({
        root: {
            outline:'none',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        closeIcon:{
            color:'lightgray',
            cursor:'pointer',
            '&:hover':{
                color:'#fff'
            }
        }

    });
    const classes =useStyles();
    const videoItems = videos.map(item=>{
        return(

           <Video  id={item.id} url={item.url} name={item.name} duration={item.duration} img={item.img} />


        )
    })
    return (
        <ul className="videos">
            {videoItems}
            <Modal open={modalVideo} className={classes.root} onClose={()=>onChangeModal()}>
                <div className="modal__videos">
                    <CloseIcon className={classes.closeIcon} onClick={()=>onChangeModal()}/>
                     <iframe width="560" height="315" src={videos[idVideo].url} frameBorder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen></iframe>
                </div>
            </Modal>
        </ul>

    );
};
const mapStateToProps = state => {
    return {
        videos: state.videos.videos,
        idVideo:state.videos.idVideo,
        modalVideo:state.videos.modalVideo
    };
}
const mapDispatchToProps = dispatch =>{
    return {
              onChangeModal:()=>dispatch(videoActions.changeModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Videos);

