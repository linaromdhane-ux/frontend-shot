import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Package, 
  DollarSign,
  ShoppingCart,
  TrendingUp,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import StatCard from '../components/StatCard';
import OrdersTable from '../components/OrdersTable';
import { allProducts } from '../data/products';

const AdminDashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // ═══ CALCULS BASÉS SUR VOS VRAIES DONNÉES ═══
  const totalProducts = allProducts.length;
  const totalRevenue = allProducts.reduce((sum, p) => sum + (p.priceNum || 0), 0);
  
  // Données de démonstration pour les commandes
  const recentOrders = [
    { 
      id: '#ORD-001', 
      customer: 'John Doe', 
      product: t('p101_name'), 
      date: '2024-01-15', 
      total: '59.000 DT', 
      status: 'Delivered' 
    },
    { 
      id: '#ORD-002', 
      customer: 'Jane Smith', 
      product: t('p103_name'), 
      date: '2024-01-14', 
      total: '59.000 DT', 
      status: 'Pending' 
    },
    { 
      id: '#ORD-003', 
      customer: 'Mike Johnson', 
      product: t('p102_name'), 
      date: '2024-01-14', 
      total: '59.000 DT', 
      status: 'Processing' 
    },
    { 
      id: '#ORD-004', 
      customer: 'Sarah Williams', 
      product: t('p104_name'), 
      date: '2024-01-13', 
      total: '69.000 DT', 
      status: 'Delivered' 
    },
    { 
      id: '#ORD-005', 
      customer: 'Tom Brown', 
      product: t('p101_name'), 
      date: '2024-01-13', 
      total: '59.000 DT', 
      status: 'Cancelled' 
    },
  ];

  const stats = [
    { 
      title: t('admin_revenue'), 
      value: totalRevenue.toLocaleString('fr-TN') + ' DT', 
      change: '+20.1%', 
      icon: DollarSign, 
      color: 'bg-[#238d7b]' 
    },
    { 
      title: t('admin_orders'), 
      value: '2,350', 
      change: '+15.3%', 
      icon: ShoppingCart, 
      color: 'bg-blue-500' 
    },
    { 
      title: t('admin_products'), 
      value: totalProducts.toString(), 
      change: '+2', 
      icon: Package, 
      color: 'bg-purple-500' 
    },
    { 
      title: t('admin_users'), 
      value: '8,282', 
      change: '+12.5%', 
      icon: Users, 
      color: 'bg-orange-500' 
    },
  ];

  const menuItems = [
    { id: 'dashboard', label: t('admin_dashboard'), icon: LayoutDashboard },
    { id: 'products', label: t('admin_menu_products'), icon: Package },
    { id: 'orders', label: t('admin_menu_orders'), icon: ShoppingBag },
    { id: 'users', label: t('admin_menu_users'), icon: Users },
    { id: 'analytics', label: t('admin_analytics'), icon: TrendingUp },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const handleMenuClick = (id) => {
    setActiveTab(id);
    if (id === 'products') {
      navigate('/products');
    }
  };

  return (
    <div 
      className="min-h-screen w-full font-montserrat bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      {/* Overlay léger */}
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />

      <div className="relative z-10 flex min-h-screen">
        
        {/* ═══ SIDEBAR ═══ */}
        <aside 
          className={`${
            isSidebarOpen ? 'w-72' : 'w-20'
          } bg-white/95 backdrop-blur-md shadow-2xl transition-all duration-300 flex flex-col`}
        >
          
          {/* Logo + Toggle */}
          <div className="p-6 flex items-center justify-between border-b border-gray-100">
            {isSidebarOpen ? (
              <button 
                onClick={() => navigate('/home')}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img 
                  src="/images/logo_SHOT.png" 
                  alt="S.HOT" 
                  className="h-7 w-auto object-contain"
                />
              </button>
            ) : (
              <button 
                onClick={() => navigate('/home')}
                className="w-full flex justify-center hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-10 h-10 bg-[#238d7b] rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-lg">S</span>
                </div>
              </button>
            )}
            
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isSidebarOpen && (
            <p className="px-6 pt-2 text-gray-500 text-xs font-semibold uppercase tracking-wider">
              {t('admin_subtitle')}
            </p>
          )}

          {/* Menu Items */}
          <nav className="flex-1 p-4 space-y-2 mt-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  title={!isSidebarOpen ? item.label : ''}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer
                    ${activeTab === item.id 
                      ? 'bg-[#238d7b] text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                    ${!isSidebarOpen && 'justify-center'}
                  `}
                >
                  <Icon size={20} strokeWidth={2.5} />
                  {isSidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-100">
            <button 
              onClick={handleLogout}
              title={!isSidebarOpen ? t('profile_logout') : ''}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm 
                text-red-600 hover:bg-red-50 transition-all cursor-pointer
                ${!isSidebarOpen && 'justify-center'}
              `}
            >
              <LogOut size={20} strokeWidth={2.5} />
              {isSidebarOpen && <span>{t('profile_logout')}</span>}
            </button>
          </div>
        </aside>

        {/* ═══ MAIN CONTENT ═══ */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              {t('admin_welcome')} 👋
            </h2>
            <p className="text-gray-600 font-medium">
              {t('admin_subtitle_desc')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white/95 backdrop-blur-md rounded-[28px] shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">{t('admin_recent_orders')}</h3>
                <p className="text-gray-500 text-sm mt-1">{t('admin_latest_orders')}</p>
              </div>
              <button className="text-[#238d7b] font-bold text-sm hover:underline cursor-pointer">
                {t('admin_view_all')}
              </button>
            </div>
            
            <OrdersTable orders={recentOrders} />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              onClick={() => navigate('/products')}
              className="bg-white/95 backdrop-blur-md rounded-[24px] shadow-lg p-6 hover:shadow-xl transition-all text-left group cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#238d7b] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Package size={24} className="text-white" strokeWidth={2.5} />
              </div>
              <h4 className="font-extrabold text-gray-900 mb-1">{t('admin_manage_products')}</h4>
              <p className="text-gray-500 text-sm">{t('admin_view_products', { count: totalProducts })}</p>
            </button>

            <button 
              onClick={() => setActiveTab('orders')}
              className="bg-white/95 backdrop-blur-md rounded-[24px] shadow-lg p-6 hover:shadow-xl transition-all text-left group cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag size={24} className="text-white" strokeWidth={2.5} />
              </div>
              <h4 className="font-extrabold text-gray-900 mb-1">{t('admin_manage_orders')}</h4>
              <p className="text-gray-500 text-sm">{t('admin_update_status')}</p>
            </button>

            <button 
              onClick={() => setActiveTab('users')}
              className="bg-white/95 backdrop-blur-md rounded-[24px] shadow-lg p-6 hover:shadow-xl transition-all text-left group cursor-pointer"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users size={24} className="text-white" strokeWidth={2.5} />
              </div>
              <h4 className="font-extrabold text-gray-900 mb-1">{t('admin_view_customers')}</h4>
              <p className="text-gray-500 text-sm">{t('admin_manage_accounts')}</p>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;