import { createContext, ReactNode } from 'react';

export interface ThemeType {
  dark: boolean;
  toggle: () => {};
}

interface ThemeProviderProps {
  children: ReactNode;
}

const DEFAULT_VALUE = {
  dark: false,
  toggle: () => {},
};

export const ThemeContext = createContext(DEFAULT_VALUE);

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ dark: true, toggle() {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
