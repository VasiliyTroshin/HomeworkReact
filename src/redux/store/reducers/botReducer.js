const initialState={
    bot:''
}

export const botReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'msg1':
            return{
                ...state,
                bot:'Hello I am bot'
            };
            case 'msg2':
            return{
                ...state,
                bot:'How are you?'
            } ;

        default:
            return state
    }
}