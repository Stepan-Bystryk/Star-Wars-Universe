import { any } from "prop-types";
import React, { useContext, useState } from "react";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";
export const THEME_NEUTRAL = "neutral";

const ThemeContext = React.createContext(any);

export const ThemeProvider = ({ children, ...props }: any) => {
  const [theme, setTheme] = useState(null);

  const chenge = (name: any) => {
    setTheme(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        chenge,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
