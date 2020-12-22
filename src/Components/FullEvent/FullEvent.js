import React from 'react';
import moment from "moment";
const FullEvent = ({title,start,kind}) => {
    return (
        <div>
          <header>
              <img src="" alt=""/>
              <hgroup>
                  <h1>{title}</h1>
                  <h4>{moment(start).format('dd')}</h4>
              </hgroup>
          </header>

            <article>
                <p className="fullEvent__description"></p>
                <ul>
                    <li>{kind}</li>
                    <li>{moment(start).format('dd MM yyyy')}</li>
                </ul>
            </article>
        </div>
    );
};

export default FullEvent;