import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Wallet, ArrowLeftRight, Settings as SettingsIcon } from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <Wallet size={20} /> },
    { name: 'Transactions', path: '/transactions', icon: <ArrowLeftRight size={20} /> },
    { name: 'Settings', path: '/settings', icon: <SettingsIcon size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col h-screen sticky top-0 transition-colors duration-300">
      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-500 mb-10 px-2 tracking-tight">
        Zenith
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 shadow-sm dark:shadow-none' 
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-white border border-transparent'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};