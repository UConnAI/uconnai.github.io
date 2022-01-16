import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import Home from './Pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <div className='index'>
      <Home />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
