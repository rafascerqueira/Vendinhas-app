import { createContext } from 'react';

export const themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ThemeContext = createContext({
  enabled: false,
  toggleTheme: () => {},
});
