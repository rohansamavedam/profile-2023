import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, NextUIProvider } from '@nextui-org/react';


const root = ReactDOM.createRoot(document.getElementById('root'));

const lightTheme = createTheme({
  type: 'light'
})

const darkTheme = createTheme({
  type: 'dark'
})

root.render(
    <NextUIProvider theme={darkTheme}> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NextUIProvider>
);

