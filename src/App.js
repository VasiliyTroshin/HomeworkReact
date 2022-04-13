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
import { botSelector } from './redux/store/reducers/chatSelector/botSelector';
import { getBot } from './redux/store/reducers/action';


function App() {
   
   const bot=useSelector(botSelector);
   const dispatch=useDispatch();

   
   useEffect(()=>{
     dispatch(getBot())
   },[])
  return (
        <div>
          {bot}
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
