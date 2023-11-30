import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lefthidebutton, setLeftHideButton] = useState(window.innerWidth <= 1280);
  const [righthidebutton, setRightHideButton] = useState(window.innerWidth <= 1280);
  const [navleft, setNavleft] = useState(window.innerWidth >= 1280); 
  const [navright, setNavright] = useState(window.innerWidth >= 1280);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
return (
    <AppContext.Provider value={{lefthidebutton,
     setLeftHideButton,
      navleft,
       setNavleft,
        navright,
        setNavright,
         righthidebutton,
          setRightHideButton,
           isAuthenticated, setIsAuthenticated}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
