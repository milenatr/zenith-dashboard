import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`
        relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none
        ${isDark ? 'bg-slate-800' : 'bg-indigo-100'}
      `}
    >
      {/* El círculo que se mueve */}
      <div
        className={`
          absolute w-6 h-6 bg-white dark:bg-indigo-500 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center
          ${isDark ? 'translate-x-8' : 'translate-x-0'}
        `}
      >
        {isDark ? (
          <Moon size={14} className="text-white" fill="currentColor" />
        ) : (
          <Sun size={14} className="text-indigo-600" />
        )}
      </div>

      {/* Iconos de fondo para referencia */}
      <div className="flex justify-between w-full px-1 items-center opacity-40">
        <Sun size={14} className={isDark ? 'text-slate-400' : 'text-transparent'} />
        <Moon size={14} className={isDark ? 'text-transparent' : 'text-slate-400'} />
      </div>
    </button>
  );
};