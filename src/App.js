import React, { useEffect, useState } from 'react';
import Content from './Content';
import Message from './Message';
import './App.scss'
import {Route,Routes,Link} from 'react-router-dom'
import Home from './pages/Home';
import Chats from './pages/Chats';
import Profile from './pages/Profile';
import NoChats from './pages/NoChats';
import Layout from './pages/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { chatSelector } from './redux/store/reducers/chatSelector/selector';


function App() {
   const chats=useSelector(chatSelector);
   const dispatch=useDispatch();

   const add=(name)=>{
     const obj={
       name:name
     }
     dispatch({type:'add',payload:obj})
   }
  return (
        <div>
          {
            chats.map((chat)=>(
              <li>
                {chat.name}
                <button onClick={()=>dispatch({type:'delete',payload:chat.id})}>x</button>
              </li>
            ))
          }
          <button onClick={()=>add(prompt())}>Add</button>
        </div>
        
        // <Routes>
        //     <Route  path='/' element={<Layout/>}>
        //       <Route index element={<Home/>}/>
        //       <Route path='/chats' element={<Chats/>}/>
        //       <Route path='/profile' element={<Profile/>}/>
        //       <Route path='*' element={<NoChats/>}/>
        //     </Route>
        // </Routes>
      
   
  );
}

export default App;
