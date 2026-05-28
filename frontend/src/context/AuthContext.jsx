import React, {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext =
  createContext(null);

const API_URL =
  "http://localhost:5001";

export const AuthProvider = ({
  children,
}) => {
  const [token, setToken] =
    useState(
      localStorage.getItem(
        "token"
      )
    );

  const [user, setUser] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "user"
        );
      return saved
        ? JSON.parse(saved)
        : null;
    });

  const login = (
    accessToken,
    userData
  ) => {
    localStorage.setItem(
      "token",
      accessToken
    );

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setToken(accessToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem(
      "token"
    );
    localStorage.removeItem(
      "user"
    );

    setToken(null);
    setUser(null);
  };

  const fetchWithAuth =
    async (
      endpoint,
      options = {}
    ) => {
      const headers = {
        "Content-Type":
          "application/json",
        ...options.headers,
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response =
        await fetch(
          `${API_URL}${endpoint}`,
          {
            ...options,
            headers,
          }
        );

      if (
        response.status === 401
      ) {
        logout();
      }

      return response;
    };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        fetchWithAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);