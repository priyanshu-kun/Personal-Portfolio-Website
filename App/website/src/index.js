import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const browserZoomLevel = Math.round(window.devicePixelRatio * 100);

if(browserZoomLevel > 110) {
  alert("Please make sure your device width is below than 100% - to perfectly render this site")
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
