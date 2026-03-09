import React, { createContext, useState, useEffect, useContext, useMemo, useCallback } from "react";
import { useColorScheme, StatusBarStyle } from "react-native";
import { StatusBarStyles } from "../utilities/Constants";
import { Theme } from "../utilities/TenantIndex";
import { ThemeColors } from "../utilities/UtilitiesModel";

// Define the context interface
interface ThemeContext {
  theme: ThemeColors; // Contains color properties
  statusBarColor: string; // Status bar color
  statusBarTheme: StatusBarStyle; // Status bar theme
  changeTheme: (value: string) => void; // Function to change theme
  setStatusBarTheme: (value: StatusBarStyle) => void; // Function to change status bar theme
  setStatusBarColor: (value: string) => void; // Function to change status bar color
}

// Create the ThemeContext with undefined default (forcing usage within Provider)
export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemTheme = (useColorScheme() as string) ?? "light"; // Ensure valid type
  
  // Initialize theme - themeSwitch mutates Theme.Colors, then use appropriate theme object
  const getThemeColors = (themeType: string): ThemeColors => {
    Theme.themeSwitch(themeType);
    return themeType === "dark" ? Theme.Dark : Theme.Light;
  };
  
  const [theme, setTheme] = useState<ThemeColors>(getThemeColors(systemTheme));
  const [statusBarColor, setStatusBarColor] = useState<string>(
    Theme.Colors.primary1
  );
  const [statusBarTheme, setStatusBarTheme] = useState<StatusBarStyle>(
    StatusBarStyles.light
  );

  useEffect(() => {
    setTheme(getThemeColors(systemTheme));

    //*********  Uncomment if you want to set status bar theme and color based on system theme ******* //
    //*********  Also change colors based on design ******* //
    setStatusBarTheme(
      systemTheme === "dark" ? StatusBarStyles.light : StatusBarStyles.dark
    );
    setStatusBarColor(
      systemTheme === "dark" ? Theme.Colors.background1 : Theme.Colors.background4
    );
  }, [systemTheme]);

  const changeTheme = useCallback((value: string) => {
    setTheme(getThemeColors(value));
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      changeTheme,
      statusBarTheme,
      statusBarColor,
      setStatusBarColor,
      setStatusBarTheme,
    }),
    [theme, changeTheme, statusBarTheme, statusBarColor, setStatusBarColor, setStatusBarTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
