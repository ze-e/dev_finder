import  { useState, createContext, ReactNode } from "react";

interface ThemeContextType {
  darkmode: boolean;
  toggleDarkmode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkmode: true,
  toggleDarkmode: () => {},
});

interface Props {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [darkmode, setDarkmode] = useState(true);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <ThemeContext.Provider value={{ darkmode, toggleDarkmode }}>
      <div className={`${darkmode ? 'theme_dark' : 'theme_light'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
