import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import styles from './styles.css';

render(
  <div>
    <App />
  </div>,
  document.getElementById('app'),
)
