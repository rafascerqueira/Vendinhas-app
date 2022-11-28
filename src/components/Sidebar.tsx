import { NavLink } from 'react-router-dom';
import ShortcutLogo from '../assets/v-de-vendinhas.svg';
import {
  PresentationChartBarIcon,
  BuildingStorefrontIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';
import { PencilSquareIcon, TableCellsIcon } from '@heroicons/react/24/solid';

export function Sidebar() {
  let activeNavlink = {
    color: '#4338ca',
  };

  return (
    <div className="absolute xl:w-64 bg-slate-400 dark:bg-slate-900 dark:text-gray-100 h-screen px-8 py-4">
      <div className="flex justify-center">
        <img src={ShortcutLogo} alt="Logo" className="h-16" />
      </div>
      <hr className="my-8 h-px bg-gray-500 border-0 dark:bg-gray-300" />
      <div className="my-8 flex flex-col text-xl font-oswald">
        <nav>
          <ul className="relative">
            <li className="relative">
              <NavLink
                to="home"
                style={({ isActive }) => (isActive ? activeNavlink : undefined)}
              >
                <PresentationChartBarIcon className="inline h-6 w-6" />{' '}
                Dashboard
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="sale"
                style={({ isActive }) => (isActive ? activeNavlink : undefined)}
              >
                <BuildingStorefrontIcon className="inline h-6 w-6" /> Vendas
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="order"
                style={({ isActive }) => (isActive ? activeNavlink : undefined)}
              >
                <PencilSquareIcon className="inline h-6 w-6" /> Pedidos
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="product"
                style={({ isActive }) => (isActive ? activeNavlink : undefined)}
              >
                <TableCellsIcon className="inline h-6 w-6" /> Produtos
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="billing"
                style={({ isActive }) => (isActive ? activeNavlink : undefined)}
              >
                <BanknotesIcon className="inline h-6 w-6" /> Faturamento
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
