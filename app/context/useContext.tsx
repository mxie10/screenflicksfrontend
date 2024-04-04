import React, { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  id:String;
  firstName:String;
  lastName:String;
  email:String;
  password:String;
}

export interface ContextType {
  user?: User | null;
  setUser?: (user: User | null) => void;
}

export const Context = createContext<ContextType>({});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {

  },[user])

  const contextValue: ContextType = {
    user: user,
    setUser: setUser,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
};