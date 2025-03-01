import { createContext, ReactNode, useEffect, useState } from "react";

type DarkModeType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Creates the Context for dark mode

export const DarkModeContext = createContext<DarkModeType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Provides the dark mode to all the children

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  
  // Gets the darkmode item from local storage

  const userTheme = localStorage.getItem("darkMode");

  // If the user theme is null then it sets the initial theme to false, else it converts the json to javascript value

  const initialUserTheme = userTheme ? JSON.parse(userTheme) : false;

  const [darkMode, setDarkMode] = useState<boolean>(initialUserTheme);

  // Adds the dark keyword to body making any dark keywords in tailwind to switch

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // Everytime darkMode is updated it sets the darkmode value

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
