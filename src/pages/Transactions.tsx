import { TransactionTable } from '../components/TransactionTable';
import { Search, Filter } from 'lucide-react';

export const Transactions = () => {
  return (
    <main className="p-8">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Historial</h1>
          <p className="text-slate-400">Revisa todos tus movimientos bancarios.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-2 pl-10 pr-4 text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
          <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:text-white">
            <Filter size={20} />
          </button>
        </div>
      </header>

      <TransactionTable />
    </main>
  );
};