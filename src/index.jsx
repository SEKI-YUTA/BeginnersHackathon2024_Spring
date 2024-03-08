import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DEMO_TRACK_DATA from './DemoData';
import GridDemo from './GridDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    {DEMO_TRACK_DATA.description} */}
    <GridDemo />
  </React.StrictMode>
);

