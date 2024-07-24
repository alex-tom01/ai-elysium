"use client"
import React, { useState, createContext, useMemo, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { morningTheme, eveningTheme, nightTheme } from './theme';

interface ThemeContextType {
    themeName: string;
    setThemeName: React.Dispatch<React.SetStateAction<string>>;
}
  
const defaultThemeContextValue: ThemeContextType = {
    themeName: 'morning',
    setThemeName: () => {},
};
const ThemeContext =  createContext<ThemeContextType>(defaultThemeContextValue);

// Custom hook to use the ThemeToggleContext
// export const useThemeToggle = () => useContext(ThemeToggleContext);

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: any) => {
    const getThemeBasedOnTime = () => {
        // const hour = new Date().getHours();
        // Morning Theme Testing 
        const hour = 12; 
        // Evening Theme Testing
        // const hour = 15; 
        // Night Theme Testing
        // const hour = 5;  
        
        if (hour >= 6 && hour < 14) return 'morning';
        if (hour >= 14 && hour < 22) return 'evening';
        if (hour >= 22 && hour < 6) return 'night';
        return 'night';
    };
    
    const [themeName, setThemeName] = useState(getThemeBasedOnTime());

    // Use useEffect to set the theme based on the hour

    useEffect(() => {
        const interval = setInterval(() => {
            setThemeName(getThemeBasedOnTime());
        }, 60 * 60 * 1000); // Check every hour
    
        return () => clearInterval(interval);
      }, []);
    
    const theme = useMemo(() => {
        switch (themeName) {
            case 'morning':
                return morningTheme;
            case 'evening':
                return eveningTheme;
            case 'night':
                return nightTheme;
            default:
                return morningTheme;
        }
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
