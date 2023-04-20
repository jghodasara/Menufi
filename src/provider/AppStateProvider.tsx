import React, { useContext, useState } from "react";
import { View } from "react-native";
import { AppData, User } from "../types/types";

export interface AppDataProvider {
  activeUser: User;
  setActiveUser: (value: User) => void;
}

export const AppStateContext = React.createContext<any>({});

export const useAppData = (): AppDataProvider => {
  return useContext(AppStateContext);
};

const AppStateProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState<User>();

  const setUserData = (value: User) => {
    setActiveUser(value);
  };

  return (
    <AppStateContext.Provider
      value={{
        activeUser: activeUser,
        setActiveUser: setUserData,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
