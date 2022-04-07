import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss'
import {BrowserRouter} from 'react-router-dom'
import { store } from './redux/store/configureStore';
import { Provider } from 'react-redux';




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


