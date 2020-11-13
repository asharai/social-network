import React,{useState} from 'react';
import './Friend.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Radio from "@material-ui/core/Radio";

const Friend = () => {
    const [selectedValue='1', setSelectedValue] = useState();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className="friend">
            <img src="https://images.unsplash.com/photo-1604158882729-a9fcaa32d25e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1354&q=80" alt="" className="friend__header"/>
           <img className="friend__logo" alt="Remy Sharp" src="https://images.unsplash.com/photo-1604919912564-6480b79b1c11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
            <hgroup className="friend__name">
                <h2>Nicholas Grissom</h2>
                <h6>San Francisco, CA</h6>
            </hgroup>


                  <div className="friend__container">
                      <div className={selectedValue=== '1' ? "friend__mainPage" :"inactive"}>
                          <ul className="friend__list">
                              <li>
                                  <h3>52</h3>
                                  <p>Friends</p>
                              </li>
                              <li>
                                  <h3>240</h3>
                                  <p>Photos</p>
                              </li>
                              <li>
                                  <h3>16</h3>
                                  <p>Videos</p>
                              </li>
                          </ul>
                          <div className="friend__icons">
                              <InsertEmoticonIcon/>
                              <QuestionAnswerIcon/>
                          </div>
                      </div>
                      <div className={selectedValue=== '2' ? "friend__description" :"inactive"}>
                          <p>Hi , I'm Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                          <p className="friend__descriptionDate">Friend Since:</p>
                          <h3>December 2014</h3>
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