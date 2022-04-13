

export const getBot=()=>{
    return (dispatch,getState)=>{
        dispatch({type:'msg1'})
        dispatch({type:'msg2'})
        setTimeout(()=>{
            console.log("Робот ответил");
        },4000)
    }
}