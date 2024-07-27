import { useEffect, useState } from 'react';
import { ThemeContext, themes } from './context/ThemeContext';
import { AppRoutes } from './Routes';

export default function App() {
  const mode = localStorage.getItem('theme_mode');
  const [theme, setTheme] = useState(mode || themes.LIGHT);
  const [enabled, setEnabled] = useState(theme === themes.LIGHT ? false : true);

  const toggleTheme = () => {
    setTheme((theme) => (theme === themes.LIGHT ? themes.DARK : themes.LIGHT));
    setEnabled(!enabled);
  };

  useEffect(() => {
    localStorage.setItem('theme_mode', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ enabled, toggleTheme }}>
      <div className={theme === themes.DARK ? themes.DARK : themes.LIGHT}>
        <div className="bg-gray-300 dark:bg-slate-800 font-mulish h-full min-h-screen">
          <AppRoutes />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
