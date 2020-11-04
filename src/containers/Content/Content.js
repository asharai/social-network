import React from 'react';
import Posts from "../../Components/Posts/Posts";
import './Content.css'
import SideContainer from "../SideContainer/SideContainer";
import ProfileIntro from "../../Components/ProfileIntro/ProfileIntro";
import BlogPost from "../../Components/BlogPost/BlogPost";
import SongList from "../../Components/Song/SongList/SongList";
import FriendsProfileIntro from "../../Components/Friends/FriendsProfileIntro/FriendsProfileIntro";
import FavouritePages from "../../Components/FavouritePages/FavouritePages";
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
                <ul className="sideContainer__listImg">
                    <li><img src="https://images.unsplash.com/photo-1586985288123-2495f577c250?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt=""/></li>
                    <li><img src="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/></li>
                    <li><img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt=""/></li>
                    <li><img src="https://images.unsplash.com/photo-1433763472432-7970c9ba5349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/></li>
                    <li><img src="https://images.unsplash.com/photo-1587058680684-e0a315822a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/></li>
                    <li><img src="https://images.unsplash.com/photo-1569875770758-f17664dfe4f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/></li>
                    <li><img src="https://images.unsplash.com/photo-1502404679462-d669245fc482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/></li>
                    <li><img src="https://images.unsplash.com/photo-1586534313131-8b27a31f9894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/></li>
                    <li><img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt=""/></li>
                </ul>
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