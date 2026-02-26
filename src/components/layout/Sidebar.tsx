import { LayoutDashboard, Wallet, ArrowUpRight, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Wallet size={20} />, label: 'Portfolio' },
    { icon: <ArrowUpRight size={20} />, label: 'Transactions' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="w-64 border-r border-slate-800 flex flex-col p-6">
      <div className="text-2xl font-bold text-indigo-500 mb-10">Zenith</div>
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button 
            key={item.label}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-900 transition-colors text-slate-400 hover:text-white"
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;