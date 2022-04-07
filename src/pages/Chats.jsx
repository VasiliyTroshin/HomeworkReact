import React, { useEffect, useState } from 'react';
import { TextField,Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CommentIcon from '@mui/icons-material/Comment'
import IconButton from '@mui/material/IconButton'
import '../App.scss'
import ChatList from '../ChatList';

const AUTHOR={
    me:'me',
    bot:'bot'
  }
const Chats = () => {
    const[messageList,setMessageList]=useState([]);
    const[value,setValue]=useState('');
    
   
   const handleButton=()=>{
     setMessageList([...messageList,{text:value,author:AUTHOR.me}]);
     setValue('');
   }
   
   const handleChange=(event)=>{
       const valueFromInput=event.target.value;
       setValue(valueFromInput);
   }
   
   useEffect(()=>{
     if(messageList.length>0 && messageList[messageList.length-1].author===AUTHOR.me){
       setMessageList([...messageList,{text:'Hello,I am bot',author:AUTHOR.bot}])
     }
   },
   [messageList]
   )
  return (
    <div className='msg'>
        <div className='list'>
        <ChatList/>
          {/* <List sx={{ width: '100px', maxWidth: 200, bgcolor: 'gbackground.paper' }}>
            {[1, 2, 3].map((value) => (
              <ListItem
                key={value}
                disableGutters
                secondaryAction={
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={`ЧАТ ${value}`} />
              </ListItem>
            ))}
          </List> */}
        </div>
        <div className='messageform'>
        <div className='messageLs'>
          {messageList.map((message, index) => (<div className={`messageDesign ${message.author==='me'?'me':'bot'}`} key={index}>
            {message.text}  <sup>{message.author}</sup></div>))}
        </div>
        
        <div className='actions'>
        <TextField
              style={{ margin: "20px" }}
              id="outlined-basic"
              label="Введите сообщение"
              variant="outlined"
              value={value} autoFocus
              onChange={handleChange}
              
            />
          
        <Button onClick={handleButton} variant="contained" endIcon={<SendIcon />} >
              Send
            </Button>
            </div>
        </div>
      </div>
  )
}

export default Chats