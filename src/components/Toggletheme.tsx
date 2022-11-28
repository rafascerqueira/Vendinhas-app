import { Switch } from '@headlessui/react';

interface IToggletheme {
  enabled: boolean;
  toggleTheme: () => void;
}

export function Toggletheme(props: IToggletheme) {
  return (
    <Switch.Group>
      <Switch
        checked={props.enabled}
        onChange={props.toggleTheme}
        className="bg-gray-300 dark:bg-gray-300 relative inline-flex h-4 w-10 mt-3 mr-4 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-gray-900 focus-visible:ring-opacity-75"
      >
        <span className="sr-only">Configurar tema</span>
        <span
          aria-hidden="true"
          className={`${props.enabled ? 'translate-x-full' : '-translate-x-2'}
            pointer-events-none inline-block h-6 w-6 -mt-[0.3rem] transform rounded-full bg-slate-800 dark:bg-indigo-600 shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <Switch.Label passive className="text-sm absolute bottom-3">
        {props.enabled ? 'Escuro' : 'Claro'}
      </Switch.Label>
    </Switch.Group>
  );
}
