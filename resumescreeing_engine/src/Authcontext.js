// import { createContext} from 'react';

// // Create an AuthContext using createContext
// /** The createContext function takes an optional argument that represents the default value for the context. In this case, we are passing an object with the following properties:*/

// export const AuthContext = createContext({
//   isLoggedIn:false,
//   token:null,
//   user:null,
//   candidateform:()=>{}
// })



import React, { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = useCallback((userData, authToken) => {
    setToken(authToken);
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
