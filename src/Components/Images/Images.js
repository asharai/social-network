import React, {useState} from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CloseIcon from '@material-ui/icons/Close';
import  './Images.css';
import {connect} from 'react-redux';
import Modal from "@material-ui/core/Modal";
import * as imagesActions from "../../store/actions/Images";
const Images = ({images,idImg,onSetIdImg,onNextImg,onPrevImg}) => {
    const [openModal,setOpenModal]= useState(false);
    const openImg = (id)=>{
        setOpenModal(true);
        onSetIdImg(id)
    }
    const handleClose = ()=>{
        setOpenModal(false);
    }
    const img = images.map(item=>{
        return (
            <li key={item.id}><img src={item.img} onClick={()=>openImg(item.id)} alt=""/></li>
        )
    })
    return (
        <div>
            <ul className="images__listImg">
                {img}
                <Modal open={openModal} onClose={handleClose}  >
                    <ul className="images__modal">
                        <li><span className="images__modalDescription"><ArrowLeftIcon  style={{ fontSize: 80 }} onClick={()=>onPrevImg()}/> </span></li>
                        <li>
                            <div className="images__modalContent">
                          <CloseIcon className="images__modalDescription" onClick={()=>setOpenModal(false)}/>
                            <img src={images[idImg].img} onClick={()=>onNextImg()} alt=""/>
                            <p >{images[idImg].id +1} of {images.length}</p>
                        </div></li>
                        <li><span className="images__modalDescription"><ArrowRightIcon  style={{ fontSize: 80 }} onClick={()=>onNextImg()} /> </span></li>
                    </ul>
                </Modal>
            </ul>
        </div>
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Images);