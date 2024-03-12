import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import  {UserContextProvider} from './context/UserContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <App />
    </UserContextProvider>

);
