// src/pages/Home.tsx
import { Wallet, TrendingUp, BarChart3 } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { TransactionTable } from '../components/TransactionTable';
import { BalanceChart } from '../components/BalanceChart';

export const Home = () => (
  <main className="flex-1 p-8">
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
      <p className="text-slate-400">Bienvenida de nuevo, Milena.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Balance Total" amount="$12,450.00" icon={<Wallet size={20} />} trend="+12.5%" />
      <StatCard title="Ingresos" amount="$3,200.00" icon={<TrendingUp size={20} />} />
      <StatCard title="Inversiones" amount="$8,120.00" icon={<BarChart3 size={20} />} />
    </div>
    <BalanceChart />
    <TransactionTable limit={3}/>
  </main>
);