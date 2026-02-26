import { Search } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { UserButton } from '@clerk/clerk-react';

export const Navbar = () => {
  return (
    <header className="h-20 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-[#020617]/50 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Buscar activos, transacciones..." 
          className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2 pl-10 pr-4 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <UserButton/>
      </div>
    </header>
  );
};