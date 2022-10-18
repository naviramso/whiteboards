import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu } from './menu';
import { Whiteboard } from "./whiteboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Menu></Menu>
  <Whiteboard></Whiteboard>
  </>
);
