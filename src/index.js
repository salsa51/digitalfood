import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Jika Anda memiliki file CSS global
import AppRouter from './route';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);