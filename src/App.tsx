import React from 'react';
import Header from './components/common/Header';
import Routes from './Routes';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Routes />
        </div>
    );
};

export default App;
