import React, { createContext, useContext, useEffect, useState } from "react";
import instance from "../AxiosConfig/instance";
import Cookies from "js-cookie";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      instance
        .get("users/getme")
        .then((response) => {
          setUser(response.data.data.user);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
