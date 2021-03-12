import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

const App: React.FC = () => {
    return (
        <div className="App">
           Hello
            <Routes />
        </div>
    );
};

export default App;
