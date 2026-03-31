import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, color }) => {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-[24px] shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center`}>
          <Icon size={24} className="text-white" strokeWidth={2.5} />
        </div>
        <div className={`flex items-center gap-1 text-sm font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          {change}
        </div>
      </div>
      <h3 className="text-gray-600 font-semibold text-sm mb-1">{title}</h3>
      <p className="text-3xl font-black text-gray-900">{value}</p>
    </div>
  );
};

export default StatCard;