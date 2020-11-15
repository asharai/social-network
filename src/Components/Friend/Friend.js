import React,{useState} from 'react';
import './Friend.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Radio from "@material-ui/core/Radio";

const Friend = ({id,name,city,friendsCount,photoCount,videoCount,description,time,avatarImg,headerImg}) => {
    const [selectedValue='1', setSelectedValue] = useState();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className="friend">
            <img src={headerImg} alt="" className="friend__header"/>
           <img className="friend__logo" alt="Remy Sharp" src={avatarImg}/>
            <hgroup className="friend__name">
                <h2>{name}</h2>
                <h6>{city}</h6>
            </hgroup>


                  <div className="friend__container">
                      <div className={selectedValue=== '1' ? "friend__mainPage" :"inactive"}>
                          <ul className="friend__list">
                              <li>
                                  <h3>{friendsCount}</h3>
                                  <p>Friends</p>
                              </li>
                              <li>
                                  <h3>{photoCount}</h3>
                                  <p>Photos</p>
                              </li>
                              <li>
                                  <h3>{videoCount}</h3>
                                  <p>Videos</p>
                              </li>
                          </ul>
                          <div className="friend__icons">
                            <span className="friend__icon">  <InsertEmoticonIcon/></span>
                              <span className="friend__icon" style={{backgroundColor:'#7c5ac2'}}>   <QuestionAnswerIcon/></span>
                          </div>
                      </div>
                      <div className={selectedValue=== '2' ? "friend__description" :"inactive"}>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi cum eaque ipsum quisquam sequi sunt! Earum neque quaerat qui! </p>
                          <p className="friend__descriptionDate">Friend Since:</p>
                          <h3>{time}</h3>
                      </div>
              </div>







            <div className="friend__switchButtons">
                <Radio
                    checked={selectedValue === "1"}
                    onChange={handleChange}
                    value="1"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "1" }}
                />
                <Radio
                    checked={selectedValue === "2"}
                    onChange={handleChange}
                    value="2"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "2" }}
                    size="small"
                />

            </div>
        </div>
    );
};

export default Friend;