import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  amount: string;
  icon: ReactNode;
  trend?: string;
}

export const StatCard = ({ title, amount, icon, trend }: StatCardProps) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
          {icon}
        </div>
        {trend && (
          <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-slate-400 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-white mt-1">{amount}</h3>
      </div>
    </div>
  );
};