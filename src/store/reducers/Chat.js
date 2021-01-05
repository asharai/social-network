const initialState = {
    chat:[
        {
            id:1,
            name:'John Ray',
            avatarImg:'https://images.unsplash.com/photo-1603893661066-ad3a9cca25ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            status:'BUSY',
            messages:[
                {
                    id:0,
                    text:'Hello man!',
                    time:1606320930000,
                    profile:1,

                },
                {
                    id:1,
                    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea earum labore sint? Ab amet aspernatur, beatae ea earum eius exercitationem facere numquam, omnis quae sit tempora velit veniam voluptatem!',
                    time:1606621760075,
                    profile:160,

                },
                {
                    id:2,
                    text:'test',
                    time:1606621780015,
                    profile:160,

                },
                {
                    id:3,
                    text:'Work',
                    time:1606621840065,
                    profile:1,

                },
                {
                    id:4,
                    text:'Realy?',
                    time:1606621940075,
                    profile:1,

                }
            ]

        },
        {
            id:2,
            name:'Nicholas Grissom',
            avatarImg:'https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
            status:'AWAY',
            messages:[
                {
                    id:0,
                    text:'Hello man!',
                    time:1606621758075,
                    profile:2,
                    img:'https://images.unsplash.com/photo-1604186838309-c6715f0d3e6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80'
                },
                {
                    id:1,
                    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea earum labore sint? Ab amet aspernatur, beatae ea earum eius exercitationem facere numquam, omnis quae sit tempora velit veniam voluptatem!',
                    time:1606621710025,
                    profile:160,
                    img:'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                }
            ]

        },
        {
            id:3,
            name:'Mark Valentine',
            avatarImg:'https://images.unsplash.com/photo-1564004999843-525a5c4d07c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
            status:'INVISIBLE',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:3,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:1606621780075,
                    profile:3,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:1606621723575,
                    profile:160,

                }

            ]
        },
        {
            id:4,
            name:'Chris Greyson',
            status:'BUSY',
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
                    time:1606621740075,
                    profile:4,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:1606621740075,
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
                    time:1606621740075,
                    profile:5,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:1606621740075,
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
                    time:1606621740075,
                    profile:6,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:1606621740075,
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
                    time:1606621740075,
                    profile:7,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:1606621740075,
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
                    time:1606621740075,
                    profile:8,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:1606621740075,
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1603243710242-cc5b72944f07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',

        },
        {
            id:9,
            name:'Mike Adams',
            status:'AWAY',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:9,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:1606621740075,
                    profile:9,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:1606621740075,
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80',

        },
        {
            id:10,
            name:'John Doe',
            status:'BUSY',
            messages:[
                {
                    id:0,
                    text:'Hello,how are you?',
                    profile:10,
                },
                {
                    id:1,
                    text:'Hello man!',
                    time:1606621740075,
                    profile:10,

                },
                {
                    id:2,
                    text: `Hello! I'm fine `,
                    time:1606621740075,
                    profile:160,

                }],

            avatarImg:'https://images.unsplash.com/photo-1603622592332-5e4d29ae8a7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',

        },

    ],
    chatOpen:false,
    idChat:1,
    mobileChat:false

}
export const getStatus = (status)=>{
    switch (status) {
        case 'ONLINE':
            return '#32e4cd';
             break;
        case 'AWAY':
            return '#ffd52f';
            break;
        case 'BUSY':
            return '#ff4f60';
            break;
        case 'INVISIBLE':
            return '#cbdfee';
            break;
        default:
            return '#cbdfee';
    }
}
const arrMonth = ['January','February','March','April','May','June','July','August','September','October','November','December']
export const getMessageTime = date =>{
    let data =((Date.now()- new Date(date)) / (60*1000)).toFixed();
    let time = ``;
    switch(true){
        case data < 1440:
            return time=`${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
            break;
        case data < 2880:
            return time=`Yesterday at ${new Date(date).getHours()} : ${new Date(date).getMinutes()}`;
            break;
        default:
            return   time = `${new Date(date).getDate()} ${arrMonth[new Date(date).getMonth()]} at ${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
            break;
    };
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
        case 'TOGGLE_MOBILE_CHAT':
            return  {
                ...state,
                mobileChat: !state.mobileChat
            }
        default:
            return state;
    }
}
export default reducer;