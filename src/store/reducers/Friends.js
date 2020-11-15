const initialState = {
    friends:[
        {
            id:1,
            name:'John Ray',
            city:'Los Angeles, CA',
            friendsCount:49,
            photoCount:132,
            videoCount:5,
            description:'Hello my name is John,nice to meet you!',
            timeWhenBecomeFriend:'April 2016',
            avatarImg:'https://images.unsplash.com/photo-1603893661066-ad3a9cca25ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            headerImg:'https://images.unsplash.com/photo-1515740921-36fe823b1ec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
        },
        {
            id:2,
            name:'Nicholas Grissom',
            city:'San Francisco, CA',
            friendsCount:52,
            photoCount:240,
            videoCount:16,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'January 2016',
            avatarImg:'https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
            headerImg:'https://images.unsplash.com/photo-1496147195884-6ab7f7c0a027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id:3,
            name:'Mark Valentine',
            city:'Long Island, NY',
            friendsCount:30,
            photoCount:10,
            videoCount:2,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'December 2017',
            avatarImg:'https://images.unsplash.com/photo-1564004999843-525a5c4d07c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
            headerImg:'https://images.unsplash.com/photo-1517157322632-15df54e726d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
            id:4,
            name:'Chris Greyson',
            city:'Austin, TX',
            friendsCount:45,
            photoCount:161,
            videoCount:16,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'May 2018',
            avatarImg:'https://images.unsplash.com/photo-1603672546308-a17e61918d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            headerImg:'https://images.unsplash.com/photo-1605198868699-34c71d33381b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id:5,
            name:'Elaine Dreifuss',
            city:'New York, NY',
            friendsCount:82,
            photoCount:204,
            videoCount:27,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'February 2016',
            avatarImg:'https://images.unsplash.com/photo-1603396828542-a423533372c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            headerImg:'https://images.unsplash.com/photo-1541741941000-21d0a964d542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1444&q=80'
        },
        {
            id:6,
            name:'Bruce Peterson',
            city:'Austin, TX',
            friendsCount:73,
            photoCount:360,
            videoCount:11,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'September 2019',
            avatarImg:'https://images.unsplash.com/photo-1495546182004-93ead47bddb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            headerImg:'https://images.unsplash.com/photo-1604769283067-12509928fdb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        },
        {
            id:7,
            name:'Carol Summers',
            city:'Los Angeles, CA',
            friendsCount:49,
            photoCount:132,
            videoCount:5,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'October 2018',
            avatarImg:'https://images.unsplash.com/photo-1603901138866-e7f3579a8082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80',
            headerImg:'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1261&q=80'
        },
        {
            id:8,
            name:'Michael Maximoff',
            city:'Portland, OR',
            friendsCount:58,
            photoCount:304,
            videoCount:19,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'June 2016',
            avatarImg:'https://images.unsplash.com/photo-1603243710242-cc5b72944f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
            headerImg:'https://images.unsplash.com/photo-1603999870974-2cd2258dac8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        },
        {
            id:9,
            name:'Mike Adams',
            city:'New York,CA',
            friendsCount:25,
            photoCount:10,
            videoCount:6,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'April 2016',
            avatarImg:'https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',
            headerImg:'https://images.unsplash.com/photo-1603568301602-3924e87dc8d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id:10,
            name:'John Doe',
            city:'Portland, OR',
            friendsCount:15,
            photoCount:24,
            videoCount:0,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'April 2017',
            avatarImg:'https://images.unsplash.com/photo-1603622592332-5e4d29ae8a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            headerImg:'https://images.unsplash.com/photo-1589577529310-d11c182c967b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
        },
        {
            id:11,
            name:'Tom Adams',
            city:'Austin, TX',
            friendsCount:44,
            photoCount:62,
            videoCount:19,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'October 2017',
            avatarImg:'https://images.unsplash.com/photo-1602666642351-3d269107f586?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
            headerImg:'https://images.unsplash.com/photo-1549799521-b6b4c1aaf2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
        },
        {
            id:12,
            name:'Ron Derk',
            city:'New York,CA',
            friendsCount:35,
            photoCount:7,
            videoCount:24,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'July 2019',
            avatarImg:'https://images.unsplash.com/photo-1603127951828-9d92f05e8763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80',
            headerImg:'https://images.unsplash.com/photo-1498595707991-4fc87268b184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
        },
        {
            id:13,
            name:'William Park',
            city:'Los Angeles, CA',
            friendsCount:21,
            photoCount:39,
            videoCount:13,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'April 2016',
            avatarImg:'https://images.unsplash.com/photo-1598257609947-6dc5586a9962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            headerImg:'https://images.unsplash.com/photo-1585508876155-0f061dfeaa50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
        },
        {
            id:14,
            name:' Jack Roah',
            city:'San Francisco, CA',
            friendsCount:91,
            photoCount:28,
            videoCount:3,
            description:'Hello my name is Jessica,nice to meet you!',
            timeWhenBecomeFriend:'February 2016',
            avatarImg:'https://images.unsplash.com/photo-1583023344958-836f5c4b1d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80',
            headerImg:'https://images.unsplash.com/photo-1605212663576-e9ea14c2a6e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80'
        },
    ],

}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'DELETE_FRIEND':
            return state;

        default:
            return state;
    }
}
export default reducer;