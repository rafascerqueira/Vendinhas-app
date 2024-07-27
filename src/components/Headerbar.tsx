import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Toggletheme } from './Toggletheme';

export function Headerbar() {
  return (
    <ThemeContext.Consumer>
      {({ enabled, toggleTheme }) => (
        <div className="flex justify-between pt-1 h-12 bg-gray-100 dark:bg-gray-900 text-indigo-700 dark:text-slate-200 font-bold text-xl px-12 shadow-md">
          <div className="inline-flex items-center">
            <img
              src="https://github.com/rafascerqueira.png"
              alt="Perfil"
              className="max-h-10 rounded-full"
            />
            <span className="pl-2">Usuário</span>
          </div>
          <div className="relative items-center">
            <Toggletheme enabled={enabled} toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
