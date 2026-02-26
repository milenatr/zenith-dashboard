import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};