import React, {useState} from 'react';
import './AddComent.css'
const AddComment = () => {
    const [text,setText]=useState();
    return (
        <div className="addComment">
           <div className="addComment__container">
                <div className="addComment__textContent">
                    <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" className="addComment__img" alt=""/>
                    <textarea name="" id="" value={text} onChange={(e)=>setText(e.target.value)} className="addComment__text"></textarea>
                </div>

               <button className="addComment__btn">Post Comment</button>
           </div>
        </div>
    );
};

export default AddComment;