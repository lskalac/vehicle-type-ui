import React, { useState } from 'react';
import Header from './components/common/Header';
import AuthContext from './context/Auth';
import Routes from './Routes';
import UserService from './services/UserService';

const App: React.FC = () => {
    const isAuth = UserService.isAuth();
    const [authenticated, setAuthenticated] = useState(isAuth);

    return (
        <div>
            <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
                <Header />
                <Routes />
            </AuthContext.Provider>
        </div>
    );
};

export default App;
