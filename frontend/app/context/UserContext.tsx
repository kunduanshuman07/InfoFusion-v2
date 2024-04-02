'use client'
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
  } from "react";
  
  interface UserContextType {
    user: any|null;
    setUser: (user: any|null) => void;
    removeUser: () => void;
  }
  
  const UserContext = createContext<UserContextType | undefined>(undefined);
  
  interface UserProviderProps {
    children: ReactNode;
  }
  
  export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any|null>(null);
    
    const removeUser = () => {
      window.localStorage.removeItem('User');
    }

    useEffect(() => {
      const userString = window.localStorage.getItem('User');
      if (userString) {
        const parsedUser = JSON.parse(userString);
        setUser(parsedUser);
      }
    }, []);
  
    useEffect(() => {
      if (user) {
        const userJSON = JSON.stringify(user);
        window.localStorage.setItem('User', userJSON);
      } else {
        window.localStorage.removeItem('User');
      }
    }, [user]);
  
    const value: UserContextType = {
      user,
      setUser,
      removeUser
    };
  
    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };
  