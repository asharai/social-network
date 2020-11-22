import friends from './Friends';
import posts from './Posts';
import images from './Images';
import videos from './Videos'
import {combineReducers} from "redux";
export default combineReducers({friends,posts,images,videos})