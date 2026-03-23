import React, { useState, useRef, useEffect } from 'react'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard'; 
import Newsletter from '../components/Newsletter'; 
import { Link, useNavigate } from 'react-router-dom';
import { Phone, MapPin, Globe, CreditCard, Bell, ShieldCheck, HelpCircle, LogOut, MoreHorizontal, Camera, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

// Assets images pour les stats
const DeliveredImg = "images/Delivered.png";
const PendingImg = "images/Pending.png";
const CancelledImg = "images/Cancelled.png";

const Profile = () => {
  const { t } = useTranslation();
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null); 
  const { wishlistItems, openWishlist, openShop } = useCart();

  // Profile Data (localStorage bech mayetfaskhouch ki taamel refresh)
  const [profileImage, setProfileImage] = useState(() => localStorage.getItem('userAvatar') || null);
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || "Mark Nova");

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userAvatar');
    navigate('/login');
  };

  // Fermer le menu "More" ki tenzel l'barra
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem('userAvatar', reader.result);
        window.dispatchEvent(new Event('storage'));
      };
      reader.readAsDataURL(file);
    }
  };

  // Gardé tel quel comme demandé
  const savedProducts = [
    { id: 1, name: 'Spirulina Tablets', price: '69,000 DT', image: '/images/product1.png', rating: 4 },
    { id: 2, name: 'Spirulina Powder', price: '59,000 DT', image: '/images/product2.png', rating: 5 },
    { id: 3, name: 'Spirulina Diamonds', price: '59,000 DT', image: '/images/product3.png', rating: 4 },
    { id: 4, name: 'Baby S.HOTs', price: '59,000 DT', image: '/images/product4.png', rating: 5 },
  ];

  return (
    <div 
      className="min-h-screen font-sans text-[#1A1A1A] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/Sign Up.png')" }}
    >
      <Navbar onHeartClick={openWishlist} onCartClick={openShop} />
      
      <main className="container mx-auto px-4 md:px-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Profil */}
          <div className="w-full lg:w-1/4 space-y-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm text-center border border-gray-100">
              <div
                className="relative w-36 h-36 mx-auto cursor-pointer mb-6 group"
                onClick={() => fileInputRef.current.click()}
              >
                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 border-[3px] border-[#129384]" />
                {profileImage ? (
                  <img src={profileImage} alt="User" className="w-36 h-36 rounded-full object-cover" />
                ) : (
                  <div className="w-36 h-36 rounded-full bg-[#C4C4C4]" />
                )}
                <div className="absolute inset-0 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40">
                  <Camera className="text-white w-8 h-8" />
                </div>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
              </div>

              <h2 className="text-[24px] font-bold text-[#1A1A1A] tracking-tight">{userName}</h2>
              <p className="text-[#757575] text-[15px] mt-0.5">mark1980@gmail.com</p>
              
              <div className="mt-8 text-left">
                <h3 className="font-bold text-[#1A1A1A] border-t border-[#F0F0F0] pt-6 text-[17px] mb-6">
                  {t('personal_info')}
                </h3>
                <div className="space-y-5">
                  <InfoItem icon={<Phone size={18} className="text-[#129384]" />} label={t('phone_number')} value="+1 (555) 012-3456" />
                  <InfoItem icon={<MapPin size={18} className="text-[#129384]" />} label={t('city')} value="Tunisia" />
                  <InfoItem icon={<Globe size={18} className="text-[#129384]" />} label={t('country')} value="Tunisia" />
                </div>
                <button className="w-full py-3.5 bg-[#129384] text-white rounded-full font-bold text-[15px] mt-10 flex items-center justify-center gap-2 transition-all hover:bg-[#36B3A8] group shadow-sm">
                  <span><Link to="/edit-profile">{t('edit_profile')}</Link></span>
                </button>
              </div>
            </div>

            <AccountSettings handleLogout={handleLogout} />
          </div>

          {/* Dashboard & History */}
          <div className="w-full lg:w-3/4 space-y-8">
            <div className="bg-gradient-to-r from-[#0ec7af] to-[#129384] rounded-[2.5rem] p-10 text-white relative shadow-2xl shadow-[#129384]/30 overflow-hidden">
              <div className="flex justify-between items-start relative z-10 mb-10">
                <div>
                  <h2 className="text-3xl md:text-3xl font-bold mb-2 tracking-tight">{t('dashboard_title')}</h2>
                  <p className="opacity-80 text-[20px]">{t('dashboard_subtitle')}</p>
                </div>
                <ShopButton />
              </div>

              <div className="grid grid-cols-4 gap-4 relative z-10 w-full items-center">
                <DashboardStat count="12" label={t('total_orders')} isImage={false} />
                <DashboardStat count="08" label={t('delivered')} icon={DeliveredImg} isImage={true} />
                <DashboardStat count="03" label={t('pending')} icon={PendingImg} isImage={true} />
                <DashboardStat count="01" label={t('cancelled')} icon={CancelledImg} isImage={true} />
              </div>
            </div>

            {/* Historique Table */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{t('purchase_history')}</h3>
                <button className="text-gray-400 text-sm">{t('view_all')}</button>
              </div>
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                <div className="overflow-x-auto overflow-y-auto max-h-[350px]">
                  <table className="w-full text-left">
                    <thead className="text-gray-400 text-sm border-b">
                      <tr>
                        <th className="pb-4 font-medium">{t('table_product')}</th>
                        <th className="pb-4 font-medium">{t('table_date')}</th>
                        <th className="pb-4 font-medium">{t('table_total')}</th>
                        <th className="pb-4 font-medium">{t('table_status')}</th>
                        <th className="pb-4 font-medium text-right">{t('table_action')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <HistoryRow id={0} activeId={openMenuId} setActiveId={setOpenMenuId} menuRef={menuRef} name="Spirulina Powder" date="09 / 02 / 2026" price="59.000DT" status="Pending" image="/images/p1.png" />
                      <HistoryRow id={1} activeId={openMenuId} setActiveId={setOpenMenuId} menuRef={menuRef} name="Spirulina Tablets" date="09 / 02 / 2026" price="59.000DT" status="Delivered" image="/images/p2.png" />
                      <HistoryRow id={2} activeId={openMenuId} setActiveId={setOpenMenuId} menuRef={menuRef} name="Baby S.HOTs" date="10 / 02 / 2026" price="49.000DT" status="Cancelled" image="/images/p3.png" />
                      <HistoryRow id={3} activeId={openMenuId} setActiveId={setOpenMenuId} menuRef={menuRef} name="Spirulina Powder" date="12 / 02 / 2026" price="59.000DT" status="Delivered" image="/images/p1.png" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Wishlist Dynamique */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">{t('saved_for_later')}</h3>
                <button onClick={openWishlist} className="text-gray-400 text-sm">{t('view_all_wishlist')}</button>
              </div>
              {wishlistItems.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-sm">{t('no_saved_products')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {wishlistItems.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

// --- Sous-composants ---
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-5">{icon}</div>
    <div>
      <p className="text-[12px] text-[#B0B0B0] font-medium mb-1 uppercase">{label}</p>
      <p className="text-[15px] font-semibold text-[#404040]">{value}</p>
    </div>
  </div>
);

const DashboardStat = ({ count, label, icon, isImage }) => (
  <div className="bg-white/70 backdrop-blur-md rounded-[1.8rem] p-5 flex items-center gap-4 w-full border border-white/10 shadow-sm overflow-hidden">
    {icon && (
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
        {isImage ? <img src={icon} alt={label} className="w-full h-full object-contain" /> : icon}
      </div>
    )}
    <div className="flex flex-col justify-center">
      <span className="text-3xl font-black text-[#302f2f] leading-none mb-1">{count}</span>
      <p className="text-[14px] font-bold text-[#302f2f]/80 uppercase tracking-wide truncate">{label}</p>
    </div>
  </div>
);

const HistoryRow = ({ id, activeId, setActiveId, menuRef, name, date, price, status, image }) => {
  const { t } = useTranslation();
  const isOpen = activeId === id;
  const statusConfig = {
    Pending: { dot: "bg-orange-400", label: t('pending') },
    Delivered: { dot: "bg-emerald-500", label: t('delivered') },
    Cancelled: { dot: "bg-red-500", label: t('cancelled') }
  };
  const config = statusConfig[status] || statusConfig.Pending;

  return (
    <tr className="hover:bg-gray-50/50 transition-colors">
      <td className="py-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 p-2 border border-gray-100 shrink-0">
            <img src={image} alt={name} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-gray-800 text-sm">{name}</span>
        </div>
      </td>
      <td className="py-5 text-gray-500 text-xs font-medium">{date}</td>
      <td className="font-bold text-gray-800 text-sm">{price}</td>
      <td className="py-5">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${config.dot}`} />
          <span className="font-bold text-gray-800 text-sm uppercase">{config.label}</span>
        </div>
      </td>
      <td className="py-5 text-right relative">
        <button 
          onClick={(e) => { e.stopPropagation(); setActiveId(isOpen ? null : id); }} 
          className="p-2 hover:bg-white hover:shadow-md rounded-full text-gray-400"
        >
          <MoreHorizontal size={20} />
        </button>
        {isOpen && (
          <div ref={menuRef} className="absolute right-0 top-10 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 py-2 px-1 min-w-[130px]">
            <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-xl">
              {t('cancel_order')}
            </button>
            <button onClick={() => setActiveId(null)} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-xl">
              {t('invoice')}
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

const ShopButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/products')}
      className="bg-white text-[#129384] flex items-center gap-2 px-10 py-3.5 rounded-full font-bold text-[17px] hover:bg-[#0e7a6d] hover:text-white transition-all shadow-lg"
    >
      <span>{t('btn_shop')}</span>
      <ShoppingCart size={20} />
    </button>
  );
};

const AccountSettings = ({ handleLogout }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
      <h3 className="font-bold text-[#1A1A1A] mb-6 text-[15px]">{t('account_settings')}</h3>
      <div className="space-y-1">
        <SettingItem icon={<CreditCard size={20} />} label={t('payment_card')} onClick={() => navigate('/add-card')} />
        <SettingItem icon={<Bell size={20} />} label={t('notifications')} />
        <SettingItem icon={<ShieldCheck size={20} />} label={t('security_privacy')} />
        <SettingItem icon={<HelpCircle size={20} />} label={t('help_support')} />
      </div>
      <div className="border-t border-[#F0F0F0] mt-6 mb-6" />
      <button onClick={handleLogout} className="w-full py-3 bg-[#129384] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#36B3A8] transition-all">
        <LogOut size={18} />
        {t('logout')}
      </button>
    </div>
  );
};

const SettingItem = ({ icon, label, onClick }) => (
  <div onClick={onClick} className="flex items-center gap-4 p-3 rounded-xl cursor-pointer group hover:bg-gray-50 transition-all">
    <div className="text-[#129384]">{icon}</div>
    <span className="text-sm font-medium text-[#555555] group-hover:text-[#129384]">{label}</span>
  </div>
);

export default Profile;