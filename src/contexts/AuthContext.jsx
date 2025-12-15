import React, { createContext, useState, useEffect } from 'react';
import { 
  initializeStorage, 
  getUsers, 
  getCurrentUser, 
  saveCurrentUser, 
  clearCurrentUser 
} from '../utils/storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeStorage();
    const savedUser = getCurrentUser();
    if (savedUser) {
      setCurrentUser(savedUser);
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      const userSession = { 
        id: user.id, 
        username: user.username, 
        role: user.role, 
        name: user.name 
      };
      setCurrentUser(userSession);
      saveCurrentUser(userSession);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    clearCurrentUser();
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};