import friends from './Friends';
import posts from './Posts';
import images from './Images';
import videos from './Videos';
import chat from './Chat';
import audio from './Audio';
import weather from './Weather'
import calendar from './Calendar'
import {combineReducers} from "redux";
export default combineReducers({friends,posts,images,videos,chat,audio,weather,calendar})