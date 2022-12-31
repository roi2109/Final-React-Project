import React, { createContext } from "react";
import { getUser } from "./services/httpService";
import { useState } from "react";
import { signIn, logOut, createUser } from "./services/httpService";
export const context = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(getUser());
  function refreshUser() {
    setUser(getUser());
  }
  async function logIn(values) {
    try {
      const user = await signIn(values);
      refreshUser();
      return user;
    } catch {
      return null;
    }
  }
  function signOut() {
    logOut();
    refreshUser();
  }
  return (
    <>
      <context.Provider value={{ user, logIn, createUser, signOut }}>
        {children}
      </context.Provider>
    </>
  );
};

export default AuthContext;
