import React from 'react';
import Video from "../Video/Video";
import './Videos.css'

const Videos = () => {
    const videoList = [
        {
            id:0,
            url:'https://www.youtube.com/embed/AcVnjOaB1A4',
            name:'Google Maps design: Exploring color',
            duration:'3:47',
            img:'data:image/jpeg;base64,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'
        },
        {
            id:1,
            url:'https://www.youtube.com/embed/XZmGGAbHqa0',
            name:'Inside Google data center',
            duration:'5:27',
            img:'https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_retina/public/wp-content/uploads/2012/10/google-coldaisle.jpg?itok=U0IebWId'
        },
        {
            id:2,
            url:'https://www.youtube.com/embed/AcVnjOaB1A4',
            name:'Fun Google Secrets',
            duration:'6:00',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4i3AfnvaRzFGAD_-KCLXH9bgsPgQjC64K-A&usqp=CAU'
        },
        {
            id:3,
            url:'https://www.youtube.com/embed/Cn8eFo7u8',
            name:'What\'s it like to work at Google?',
            duration:'2:10',
            img:'https://i.insider.com/55e9e1c5bd86ef17008b84bc?width=1100&format=jpeg&auto=webp'
        },
        {
            id:4,
            url:'https://www.youtube.com/embed/HluANRwPyNo',
            name:'What people think programming is vs. how it actually is',
            duration:'0:30',
            img:'https://coubsecure-s.akamaihd.net/get/b210/p/coub/simple/cw_timeline_pic/6f97c4b8d53/7aaddbdb9f9a48b832986/ios_large_1564550516_image.jpg'
        },
        {
            id:5,
            url:'https://www.youtube.com/embed/Og847HVwRSI',
            name:'Most Popular Programming Languages 1965 - 2019',
            duration:'4:58',
            img:'https://i.ytimg.com/vi/Og847HVwRSI/maxresdefault.jpg'
        },
        {
            id:6,
            url:'https://www.youtube.com/embed/Dv7gLpW91DM',
            name:'Why Programming Is Important?',
            duration:'5:44',
            img:'https://i.ytimg.com/vi/Dv7gLpW91DM/maxresdefault.jpg'
        },
        {
            id:7,
            url:'https://www.youtube.com/embed/Da5TOXCwLSg',
            name:'BBC Learning - What Is An Algorithm',
            duration:'1:07',
            img:'https://i.ytimg.com/vi/Da5TOXCwLSg/hqdefault.jpg'
        },
    ]
    const videoItems = videoList.map(item=>{
        return(
        <Video id={item.id} url={item.url} name={item.name} duration={item.duration} img={item.img} />
        )
    })
    return (
        <ul className="videos">
            {videoItems}
        </ul>
    );
};

export default Videos;

