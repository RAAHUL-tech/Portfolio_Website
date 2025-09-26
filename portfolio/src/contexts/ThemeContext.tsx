import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('auto');
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('dark');

  const getTimeBasedTheme = (): 'light' | 'dark' => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  };

  const updateActualTheme = (newTheme: Theme) => {
    let resolvedTheme: 'light' | 'dark';
    
    if (newTheme === 'auto') {
      resolvedTheme = getTimeBasedTheme();
    } else {
      resolvedTheme = newTheme;
    }
    
    setActualTheme(resolvedTheme);
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    document.body.className = resolvedTheme === 'light' ? 'light-theme' : 'dark-theme';
  };

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    updateActualTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (theme === 'auto') {
      // Update theme every minute to check for time changes
      const interval = setInterval(() => {
        updateActualTheme(theme);
      }, 60000);

      return () => clearInterval(interval);
    }
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = actualTheme === 'light' ? 'dark' : 'light';
    handleSetTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        actualTheme,
        setTheme: handleSetTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
