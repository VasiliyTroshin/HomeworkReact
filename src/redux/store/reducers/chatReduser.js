const initialState={
    chats:[
        {
            id:1,
            name:'Чат 1'
        },
        {
            id:2,
            name:'Чат 2'
        },
        {
            id:3,
            name:'Чат 3'
        }
    ],
    messages:[
        {
            chatId:2,
            text:'Привет'
        },
        {
            chatId:2,
            text:'Как дела?'
        },
        {
            chatId:3,
            text:'Спасибо.Хорошо'
        }
    ]
}

export const chatReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'delete':
            return {
                ...state,
                chats:state.chats.filter((item)=>item.id!==action.payload)
            };
        case 'add':
            return {
                ...state,
                chats:[...state.chats,action.payload]
            }
        default:
            return state
    }
}