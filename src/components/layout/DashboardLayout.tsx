import { useState } from 'react';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#020617] relative">
      {/* 2. Sidebar con lógica de apertura */}
      <div className={`
        fixed inset-y-0 left-0 z-[60] w-64 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:flex
      `}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* 3. Overlay (Cierra el menú si tocas fuera) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[55] md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 4. Contenido Principal */}
      <main className="flex-1 w-full min-w-0 p-4 md:p-8 pt-16 md:pt-8 transition-colors">
        <Navbar onOpenMenu={() => setIsSidebarOpen(true)} />
        <div className="mt-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};