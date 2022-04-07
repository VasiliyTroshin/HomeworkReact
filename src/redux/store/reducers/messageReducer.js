
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

export const messageReducer=(state=initialState,action)=>{
    switch(action.type){

        default:
            return state
    }
}