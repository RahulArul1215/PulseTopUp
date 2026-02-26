import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    // const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get('isAuthenticated') === 'true');
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [uid,setuid]=useState();
    const [user,setUser]=useState('');
    const [info,setinfo]=useState([]);


    const login = () => {
        setIsAuthenticated(true);
        // Cookies.set('isAuthenticated', 'true', { expires: 1 }); // Expires in 1 day
    };

    const logout = () => {
        setIsAuthenticated(false);
        // Cookies.remove('isAuthenticated');
    };

    // useEffect(() => {
    //     setIsAuthenticated(Cookies.get('isAuthenticated') === 'true');
    // }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated,setIsAuthenticated, login, logout,setUser,user,info,setinfo,uid,setuid}}>
            {children}
        </AuthContext.Provider>
    );
};
