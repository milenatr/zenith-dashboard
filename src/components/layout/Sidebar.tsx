import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Wallet, ArrowLeftRight, X } from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Portfolio', path: '/dashboard/portfolio', icon: <Wallet size={20} /> },
    { name: 'Transactions', path: '/dashboard/transactions', icon: <ArrowLeftRight size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col h-screen sticky top-0 transition-colors duration-300">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-bold text-indigo-600 tracking-tight">Zenith</h1>
        
        {/* 2. Este botón solo se ve en móviles (md:hidden) */}
        <button 
          onClick={onClose} 
          className="md:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg"
        >
          <X size={20} />
        </button>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={onClose}
            end={item.path === '/dashboard'}
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