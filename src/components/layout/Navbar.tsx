import { Menu, Search } from 'lucide-react';
import { UserButton } from "@clerk/clerk-react";
import { ThemeToggle } from '../ThemeToggle'; // Tu componente de Dark Mode

export const Navbar = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  return (
    <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
      
      {/* Fila Superior: Menú y Perfil (en Mobile) */}
      <div className="flex items-center justify-between w-full md:w-auto gap-4">
        {/* El botón de hamburguesa que agregamos antes */}
        <button 
          onClick={onOpenMenu}
          className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
        >
          <Menu size={20} />
        </button>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <UserButton/>
        </div>
      </div>

      {/* Buscador: Se expande en mobile, ancho fijo en desktop */}
      <div className="relative w-full md:max-w-md group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
        <input 
          type="text" 
          className="text-bg-slate-800 dark:text-white w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
        />
      </div>

      {/* Acciones en Desktop: Ocultas en mobile porque ya las pusimos arriba */}
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />
        <UserButton/>
      </div>

    </nav>
  );
};