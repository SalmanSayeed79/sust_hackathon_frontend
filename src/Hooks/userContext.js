import React, {createContext,useContext } from "react";

import useLocalStorage from '../Hooks/useLocalStorage'

export const UserIDContext = createContext();
export const UserIDUpdateContext = createContext();
export function useUserID(){
    return useContext(UserIDContext)
}
export function useUserIDUpdate(){
    return useContext(UserIDUpdateContext)
}

export const IDContextProvider = ({ children }) => {
  const [userID, setUserID] = useLocalStorage("buldrID",null);

  const updateBuldrID=(data)=>{
    setUserID(data)
  }


  return (
    <UserIDContext.Provider value={userID}>
      <UserIDUpdateContext.Provider value={updateBuldrID}>
        {children}
      </UserIDUpdateContext.Provider>
    </UserIDContext.Provider>

  );
};