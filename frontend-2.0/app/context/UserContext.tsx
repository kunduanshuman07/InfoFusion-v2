'use client'
import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
  } from "react";
  
  interface UserContextType {
    user: any;
    setUser: (user: any) => void;
  }
  
  const UserContext = createContext<UserContextType | undefined>(undefined);
  
  interface UserProviderProps {
    children: ReactNode;
  }
  
  export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<any>();
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUser must be used within an UserProvider");
    }
    return context;
  };
  