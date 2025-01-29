import React, { createContext, useState } from 'react';

// Crear el contexto
export const MyContext = createContext();

// Crear el Provider del contexto
export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // El estado del usuario

  const login = (username) => {
    setUser({ name: username });  // Establecemos el usuario con el nombre proporcionado
  };

  const logout = () => {
    setUser(null);  // Limpiamos el usuario
  };

  return (
    <MyContext.Provider value={{ user, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};