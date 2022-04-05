import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss'
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState={
  contacts:[
    {
      name:'Иван'
    },
    {
      name:'Сергей'
    },
    {
      name:'Ольга'
    }
  ],
  isActive:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
      case 'addContact':
        return '';
      default:
        return state
    }
}

const store=createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
     
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


