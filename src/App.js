import React from 'react';
import Content from './Content';
import Message from './Message';
import './App.scss'


function App() {
  return (
    <div className="App">
     <h1>Первое приложение</h1>
    <img className='imgEl' src={'https://image.pngaaa.com/930/2507930-middle.png'}></img>
    <Content />
    <Message text='React — это инструмент для создания пользовательских интерфейсов' />
    </div>
  );
}

export default App;
