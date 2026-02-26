import { Link } from "react-router-dom";

interface Transaction {
  id: number;
  desc: string;
  date: string;
  amount: string;
  type: 'income' | 'expense';
}

const ALL_TRANSACTIONS: Transaction[] = [
  { id: 1, desc: 'Suscripción Netflix', date: '24 Feb, 2026', amount: '-$15.99', type: 'expense' },
  { id: 2, desc: 'Depósito Crypto', date: '22 Feb, 2026', amount: '+$450.00', type: 'income' },
  { id: 3, desc: 'Pago Freelance', date: '20 Feb, 2026', amount: '+$1,200.00', type: 'income' },
  { id: 4, desc: 'Compra Supermercado', date: '19 Feb, 2026', amount: '-$85.50', type: 'expense' },
  { id: 5, desc: 'Inversión Apple', date: '18 Feb, 2026', amount: '-$150.00', type: 'expense' },
  { id: 6, desc: 'Venta ETH', date: '15 Feb, 2026', amount: '+$900.00', type: 'income' },
];

export const TransactionTable = ({ limit }: { limit?: number }) => {
  
  const displayData = limit ? ALL_TRANSACTIONS.slice(0, limit) : ALL_TRANSACTIONS;

  return (
    <div className="mt-12 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-slate-800 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Transacciones Recientes</h3>
        {limit && (
          <Link
            to="/transactions" 
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            Ver todas
          </Link>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/30 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Concepto</th>
              <th className="px-6 py-4 font-medium">Fecha</th>
              <th className="px-6 py-4 font-medium text-right">Monto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {displayData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/20 transition-colors group">
                <td className="px-6 py-4 text-slate-700 dark:text-slate-200">{item.desc}</td>
                <td className="px-6 py-4 text-slate-400 dark:text-slate-500 text-sm">{item.date}</td>
                <td className={`px-6 py-4 text-right font-medium ${
                  item.type === 'income' ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                }`}>
                  {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};