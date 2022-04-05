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



function App() {
   
  return (
        
        <Routes>
            <Route  path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='/chats' element={<Chats/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='*' element={<NoChats/>}/>
            </Route>
        </Routes>
      
   
  );
}

export default App;
