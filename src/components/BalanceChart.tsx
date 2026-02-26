import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Lun', balance: 4000 },
  { name: 'Mar', balance: 3000 },
  { name: 'Mie', balance: 5000 },
  { name: 'Jue', balance: 4780 },
  { name: 'Vie', balance: 5890 },
  { name: 'Sab', balance: 6390 },
  { name: 'Dom', balance: 7500 },
];

const gridColor = document.documentElement.classList.contains('dark') ? '#1e293b' : '#e2e8f0';

export const BalanceChart = () => {
  return (
    <div className="mt-8 bg-white dark:bg-slate-900/40 borderborder-slate-200 dark:border-slate-800 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Rendimiento de Cartera</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
            />
            <YAxis 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area 
              type="monotone" 
              dataKey="balance" 
              stroke="#6366f1" 
              fillOpacity={1} 
              fill="url(#colorBalance)" 
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};