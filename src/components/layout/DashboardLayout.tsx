import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const DashboardLayout = () => {
  return (
    // Agregamos clases para el modo claro (bg-slate-50) y oscuro (dark:bg-[#020617])
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};