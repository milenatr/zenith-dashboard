import type { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-50">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />
      
      {/* Contenido principal scrolleable */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;