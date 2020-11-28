const initialState = {
    chat:[
        {
            id:1,
            name:'John Ray',
            avatarImg:'https://images.unsplash.com/photo-1603893661066-ad3a9cca25ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:1,

                },
                {
                    id:1,
                    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea earum labore sint? Ab amet aspernatur, beatae ea earum eius exercitationem facere numquam, omnis quae sit tempora velit veniam voluptatem!',
                    time:'Yesterday',
                    profile:160,

                },
                {
                    id:2,
                    text:'test',
                    time:'Yesterday',
                    profile:160,

                },
                {
                    id:3,
                    text:'Work',
                    time:'Yesterday',
                    profile:1,

                },
                {
                    id:4,
                    text:'Realy?',
                    time:'Yesterday',
                    profile:1,

                }
            ]

        },
        {
            id:2,
            name:'Nicholas Grissom',
            avatarImg:'https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:2,
                    img:'https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80'
                },
                {
                    id:1,
                    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea earum labore sint? Ab amet aspernatur, beatae ea earum eius exercitationem facere numquam, omnis quae sit tempora velit veniam voluptatem!',
                    time:'Yesterday',
                    profile:160,
                    img:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                }
            ]

        },
        {
            id:3,
            name:'Mark Valentine',
            avatarImg:'https://images.unsplash.com/photo-1564004999843-525a5c4d07c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:3,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:3,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:'Yesterday',
                    profile:160,

                }

            ]
        },
        {
            id:4,
            name:'Chris Greyson',
            status:'ONLINE',
            avatarImg:'https://images.unsplash.com/photo-1603672546308-a17e61918d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:4,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:4,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:'Yesterday',
                    profile:160,

                }]
        },
        {
            id:5,
            name:'Elaine Dreifuss',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:5,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:5,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:'Yesterday',
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1603396828542-a423533372c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',

        },
        {
            id:6,
            name:'Bruce Peterson',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:6,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:6,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:'Yesterday',
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1495546182004-93ead47bddb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',

        },
        {
            id:7,
            name:'Carol Summers',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:7,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:7,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:'Yesterday',
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1603901138866-e7f3579a8082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80',

        },
        {
            id:8,
            name:'Michael Maximoff',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:8,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:8,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:'Yesterday',
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1603243710242-cc5b72944f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',

        },
        {
            id:9,
            name:'Mike Adams',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:9,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:9,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:'Yesterday',
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',

        },
        {
            id:10,
            name:'John Doe',
            status:'ONLINE',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:10,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:'Yesterday',
                    profile:10,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:'Yesterday',
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1603622592332-5e4d29ae8a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',

        },

    ],
    chatOpen:false,
    idChat:1

}
const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'OPEN_CHAT':
            return{
                ...state,
                chatOpen: true,
                idChat: action.id
            }
        case 'CLOSE_CHAT':
            return{
                ...state,
                chatOpen: false,
            }
        case 'ADD_MESSAGE':
            let id = state.chat.findIndex(item=>item.id===action.id);
            let newChat = [...state.chat];
            newChat[id].messages = newChat[id].messages.concat( action.message);
            return{
                ...state,
                chat: newChat
            }
        default:
            return state;
    }
}
export default reducer;