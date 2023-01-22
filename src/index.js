import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, NextUIProvider } from '@nextui-org/react';


const root = ReactDOM.createRoot(document.getElementById('root'));

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      secondary: 'linear-gradient(112deg, #009FFF -25%, #ec2F4B 80%)',
      gradient: 'linear-gradient(112deg, #009FFF -25%, #ec2F4B 80%)'
    }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      secondary: 'linear-gradient(112deg, #009FFF -25%, #ec2F4B 80%)',
      gradient: 'linear-gradient(112deg, #009FFF -25%, #ec2F4B 80%)'
    }
  }
})

root.render(
    <NextUIProvider theme={darkTheme}> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NextUIProvider>
);

