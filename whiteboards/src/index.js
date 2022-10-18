import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu } from './menu';
import { Whiteboard } from "./whiteboard";
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
  <Menu></Menu>
  <Whiteboard></Whiteboard>
  </div>
);
