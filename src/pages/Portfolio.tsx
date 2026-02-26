import { ArrowUpRight, ArrowDownRight, Coins, Landmark, PieChart } from 'lucide-react';

const ASSETS = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', balance: '0.45', value: '$22,500', change: '+5.2%', type: 'crypto' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', balance: '3.2', value: '$8,400', change: '-2.1%', type: 'crypto' },
  { id: 3, name: 'Apple Inc.', symbol: 'AAPL', balance: '15', value: '$2,775', change: '+1.4%', type: 'stock' },
  { id: 4, name: 'S&P 500 ETF', symbol: 'VOO', balance: '10', value: '$4,100', change: '+0.8%', type: 'etf' },
];

export const Portfolio = () => {
  return (
    <main className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Mi Portfolio</h1>
        <p className="text-slate-400">Distribución de activos y rendimiento.</p>
      </header>

      {/* Grid de Resumen Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-6 rounded-2xl text-white shadow-lg">
          <div className="flex justify-between items-center opacity-80 mb-2">
            <span className="text-sm font-medium">Patrimonio Neto</span>
            <PieChart size={20} />
          </div>
          <h2 className="text-3xl font-bold">$37,775.00</h2>
          <div className="mt-4 text-xs bg-white/20 inline-block px-2 py-1 rounded-lg">
            ROI Total: +18.4%
          </div>
        </div>
      </div>

      {/* Lista de Activos */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800">
          <h3 className="text-xl font-semibold text-white">Tus Activos</h3>
        </div>
        <div className="divide-y divide-slate-800">
          {ASSETS.map((asset) => (
            <div key={asset.id} className="p-4 hover:bg-slate-800/30 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-indigo-400">
                  {asset.type === 'crypto' ? <Coins size={24} /> : <Landmark size={24} />}
                </div>
                <div>
                  <p className="text-white font-semibold">{asset.name}</p>
                  <p className="text-slate-500 text-sm">{asset.balance} {asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">{asset.value}</p>
                <div className={`flex items-center justify-end text-sm ${asset.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {asset.change.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {asset.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};