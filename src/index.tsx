import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {ThemeContextProvider} from 'context/theme.context';
import {App} from 'pages';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
