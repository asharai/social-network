import React from 'react';
import Posts from "../../Components/Posts/Posts";
import './Content.css'
import SideContainer from "../SideContainer/SideContainer";
import ProfileIntro from "../../Components/ProfileIntro/ProfileIntro";
import BlogPost from "../../Components/BlogPost/BlogPost";
import SongList from "../../Components/Song/SongList/SongList";
import FriendsProfileIntro from "../../Components/Friends/FriendsProfileIntro/FriendsProfileIntro";
import FavouritePages from "../../Components/FavouritePages/FavouritePages";
import Images from "../../Components/Images/Images";
const Content = () => {

    return (
        <div className="content">
            <div className="content__list">
                <SideContainer title="Profile Intro" needPadding>
                <ProfileIntro/>
                </SideContainer>
                <SideContainer title="My Playlist">
                <SongList/>
                </SideContainer>
                <SideContainer title="Favourite Pages" needPadding>
                <FavouritePages/>
                </SideContainer>
            </div>
            <Posts/>
            <div  className="content__list">
                <SideContainer title="Last Photos" needPadding>
               <Images/>
                </SideContainer>
                <SideContainer title="Blog Posts">

                    <BlogPost title="Remote work problems and how we solved them" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae dolore harum ipsa magnam maxime nemo non odio recusandae! Delectus et, excepturi expedita facere magnam officiis quisquam similique ullam veniam." date="2 hours ago"/>
                    <BlogPost title="How to become developer in 2020" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae dolore harum ipsa magnam maxime nemo non odio recusandae! Delectus et, excepturi expedita facere magnam officiis quisquam similique ullam veniam." date="2 hours ago"/>


                </SideContainer>
                <SideContainer title="Friends" needPadding>
                <FriendsProfileIntro/>
                </SideContainer>

            </div>
    </div>
    );
};

export default Content;