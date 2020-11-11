import React, {useState} from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CloseIcon from '@material-ui/icons/Close';
import  './Images.css';
import Modal from "@material-ui/core/Modal";
const Images = () => {
    const [openModal=false,setOpenModal]= useState();
    const [idImg=0,setIdimg] = useState();

    const imgs = [
        {id:1,img:"https://images.unsplash.com/photo-1586985288123-2495f577c250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},
        {id:2,img:"https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
        {id:3,img:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"},
        {id:4,img:"https://images.unsplash.com/photo-1433763472432-7970c9ba5349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {id:5,img:"https://images.unsplash.com/photo-1587058680684-e0a315822a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {id:6,img:"https://images.unsplash.com/photo-1569875770758-f17664dfe4f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {id:7,img:"https://images.unsplash.com/photo-1502404679462-d669245fc482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
        {id:8,img:"https://images.unsplash.com/photo-1586534313131-8b27a31f9894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
        {id:9,img:"https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"},
    ]

    const openImg = (id)=>{
        setOpenModal(true);
        setIdimg(id)
    }
    const handleClose = ()=>{
        setOpenModal(false);
    }
    const img = imgs.map(item=>{
        return (
            <li key={item.id}><img src={item.img} onClick={()=>openImg(item.id-1)} alt=""/></li>
        )
    })
    const nextImg = ()=>{
        if(idImg+1>=imgs[imgs.length-1].id){
            setIdimg(0)
        }
     else{
            setIdimg(idImg+1)
        }
    }
    const prevImg = ()=>{
        if(idImg==0){
            setIdimg(imgs[imgs.length-1].id-1)
        }
        else{
            setIdimg(idImg-1)
        }
    }
console.log(idImg)
    return (
        <div>
            <ul className="images__listImg">
                {img}
                <Modal open={openModal} onClose={handleClose}  >
                    <ul className="images__modal">
                        <li><span className="images__modalDescription"><ArrowLeftIcon  style={{ fontSize: 80 }} onClick={()=>prevImg()}/> </span></li>
                        <li>
                            <div className="images__modalContent">
                          <CloseIcon className="images__modalDescription" onClick={()=>setOpenModal(false)}/>
                            <img src={imgs[idImg].img} onClick={()=>nextImg()} alt=""/>
                            <p >{imgs[idImg].id} of 9</p>
                        </div></li>
                        <li><span className="images__modalDescription"><ArrowRightIcon  style={{ fontSize: 80 }} onClick={()=>nextImg()} /> </span></li>
                    </ul>
                </Modal>
            </ul>
        </div>
    );
};

export default Images;