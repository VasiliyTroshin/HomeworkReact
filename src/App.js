import React, { useEffect, useState } from 'react';
import Content from './Content';
import Message from './Message';
import './App.scss'

const AUTHOR={
  me:'me',
  bot:'bot'
}

function App() {
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
    <div >
   <div className="App">
        <div className='messageLs'>
          {messageList.map((message, index) => (<div className={`messageDesign ${message.author==='me'?'me':'bot'}`}>
            {message.text} <sup>{message.author}</sup></div>))}
        </div>
        <div >
          <input onChange={handleChange} value={value} />
          <button onClick={handleButton} className='btn'>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
