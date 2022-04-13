import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss'
import {BrowserRouter} from 'react-router-dom'
import { store } from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistor from './redux/store/configureStore';



ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
           <App />
        </PersistGate>
      </Provider>
     
    {/* </BrowserRouter> */}
    
  </React.StrictMode>,
  document.getElementById('root')
);


