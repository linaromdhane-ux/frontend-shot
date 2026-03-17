import React, { useState, useRef, useEffect } from 'react'; // CORRECTION 1: Ajout de useEffect ici pour éviter l'écran blanc
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard'; 
import Newsletter from '../components/Newsletter'; 
import { Link, useNavigate } from 'react-router-dom';
import { Phone, MapPin, Globe, CreditCard, Bell, ShieldCheck, HelpCircle, LogOut, MoreHorizontal, Camera, CheckCircle2, Clock, XCircle, LayoutGrid, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

// --- LES SEULES LIGNES AJOUTÉES POUR RÉSOLVE LE BUG ---
const DeliveredImg = "images/Delivered.png";
const PendingImg = "images/Pending.png";
const CancelledImg = "images/Cancelled.png";

const Profile = () => {
  const { t } = useTranslation();
  // Stocke l'index de la ligne où le menu est ouvert (null si aucun)
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const fileInputRef = useRef(null); 
  const { wishlistItems, openWishlist, openShop } = useCart();

  // 1. Synchronisation dynamique du nom et de l'image
  const [profileImage, setProfileImage] = useState(() => localStorage.getItem('userAvatar') || null);
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || "Mark Nova");

  const handleLogout = () => {
    // 2. Gestion du Log Out
    localStorage.removeItem('userName');
    localStorage.removeItem('userAvatar');
    navigate('/login');
  };

  // CORRECTION 2: Détection du clic à l'extérieur pour fermer l'onglet
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
          
          {/* --- SECTION GAUCHE --- */}
          <div className="w-full lg:w-1/4 space-y-6">

            {/* Personal Info Card */}
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
                  <Camera className="text-white w-8 h-8" strokeWidth={1.5} />
                </div>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
              </div>

              <h2 className="text-[24px] font-bold text-[#1A1A1A] tracking-tight">{userName}</h2>
              <p className="text-[#757575] text-[15px] mt-0.5">mark1980@gmail.com</p>
              
              <div className="mt-8 text-left">
                <h3 className="font-bold text-[#1A1A1A] border-t border-[#F0F0F0] pt-6 text-[17px] mb-6">{t('personal_info')}</h3>
                <div className="space-y-5">
                  <InfoItem icon={<Phone size={18} className="text-[#129384] mt-1 stroke-[1.8]" />} label={t('phone_number')} value="+1 (555) 012-3456" />
                  <InfoItem icon={<MapPin size={18} className="text-[#129384] mt-1 stroke-[1.8]" />} label={t('city')} value="Tunisia" />
                  <InfoItem icon={<Globe size={18} className="text-[#129384] mt-1 stroke-[1.8]" />} label={t('country')} value="Tunisia" />
                </div>
                <button className="w-full py-3.5 bg-[#129384] text-white rounded-full font-bold text-[15px] mt-10 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#36B3A8] group shadow-sm">
                  <span><Link to="/edit-profile" className="votre-classe-bouton">
  {t('edit_profile')}
</Link></span>
                  <div className="w-0 opacity-0 overflow-hidden group-hover:w-5 group-hover:opacity-100 transition-all duration-300 flex items-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Account Settings Card */}
            <AccountSettings handleLogout={handleLogout} />
          </div>

          {/* --- SECTION DROITE --- */}
          <div className="w-full lg:w-3/4 space-y-8">
            
            {/* Dashboard avec Dégradé */}
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

                <div className="relative flex items-center h-full">
                  <div className="absolute -left-2 w-[1.5px] h-10 bg-white/40 rounded-full shrink-0" />
                  <DashboardStat 
                    count="08" 
                    label={t('delivered')} 
                    icon={DeliveredImg} 
                    isImage={true} 
                  />
                </div>

                <DashboardStat 
                  count="03" 
                  label={t('pending')} 
                  icon={PendingImg} 
                  isImage={true} 
                />

                <DashboardStat 
                  count="01" 
                  label={t('cancelled')} 
                  icon={CancelledImg} 
                  isImage={true} 
                />
              </div>
            </div>

            {/* Purchase History */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{t('purchase_history')}</h3>
                <button className="text-gray-400 text-sm">{t('view_all')}</button>
              </div>
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                <div className="overflow-x-auto overflow-y-auto max-h-[280px]">
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
                      {/* CORRECTION 3: On utilise l'index pour que Profile gère quel menu est ouvert */}
                      <HistoryRow id={0} activeId={openMenuId} setActiveId={setOpenMenuId} menuRef={menuRef} name="Spirulina Powder" date="09 / 02 / 2026" price="59.000DT" status="Pending" image="/images/p1.png" />
                      <HistoryRow id={1} activeId={openMenuId} setActiveId={setOpenMenuId} menuRef={menuRef} name="Spirulina Tablets" date="09 / 02 / 2026" price="59.000DT" status="Delivered" image="/images/p2.png" />
                      <HistoryRow id={2} activeId={openMenuId} setActiveId={setOpenMenuId} menuRef={menuRef} name="Baby S.HOTs" date="10 / 02 / 2026" price="49.000DT" status="Cancelled" image="/images/p3.png" />
                      <HistoryRow id={3} activeId={openMenuId} setActiveId={setOpenMenuId} menuRef={menuRef} name="Spirulina Powder" date="12 / 02 / 2026" price="59.000DT" status="Delivered" image="/images/p1.png" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Saved for Later */}
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

// --- HELPER COMPONENTS ---
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-5">{icon}</div>
    <div>
      <p className="text-[12px] text-[#B0B0B0] font-medium tracking-wide leading-none mb-1.5 uppercase">{label}</p>
      <p className="text-[15px] font-semibold text-[#404040]">{value}</p>
    </div>
  </div>
);

const DashboardStat = ({ count, label, icon, isImage }) => (
  <div className="bg-white/70 backdrop-blur-md rounded-[1.8rem] p-5 flex items-center gap-4 w-full border border-white/10 shadow-sm cursor-default overflow-hidden">
    {(isImage || icon) && (
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
        {isImage ? (
          <img src={icon} alt={label} className="w-full h-full object-contain" />
        ) : (
          icon
        )}
      </div>
    )}
    <div className="flex flex-col justify-center min-w-0">
      <span className="text-3xl font-black tracking-tighter text-[#302f2f] leading-none mb-1">
        {count}
      </span>
      <p className="text-[14px] font-bold text-[#302f2f]/80 leading-tight uppercase tracking-wide truncate">
        {label}
      </p>
    </div>
  </div>
);

// CORRECTION: HistoryRow reçoit maintenant les outils pour se fermer/s'ouvrir proprement
const HistoryRow = ({ id, activeId, setActiveId, menuRef, name, date, price, status, image }) => {
  const { t } = useTranslation();
  const isOpen = activeId === id;

  const statusConfig = {
    Pending: { dot: "bg-orange-400" },
    Delivered: { dot: "bg-emerald-500" },
    Cancelled: { dot: "bg-red-500" }
  };

  const config = statusConfig[status] || statusConfig.Pending;
  const statusLabel = { Pending: t('pending'), Delivered: t('delivered'), Cancelled: t('cancelled') };

  return (
    <tr className="hover:bg-gray-50/50 transition-colors">
      <td className="py-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center p-2 border border-gray-100 shrink-0">
            <img src={image} alt={name} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-gray-800 text-sm">{name}</span>
        </div>
      </td>
      <td className="py-5 text-gray-500 text-xs font-medium">{date}</td>
      <td className="font-bold text-gray-800 text-sm">{price}</td>
      <td className="py-5">
        <div className={`flex items-center gap-2`}>
          <div className={`w-2 h-2 rounded-full ${config.dot}`} />
          <span className="font-bold text-gray-800 text-sm tracking-wider">{statusLabel[status]}</span>
        </div>
      </td>
      <td className="py-5 text-right relative">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setActiveId(isOpen ? null : id);
          }} 
          className="p-2 hover:bg-white hover:shadow-md rounded-full transition-all text-gray-400"
        >
          <MoreHorizontal size={20} />
        </button>
        {isOpen && (
          <div ref={menuRef} className="absolute right-0 top-10 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 py-2 px-1 min-w-[130px]">
            {/* On ne met plus setOpen(false) mais on gère l'action sans fermer l'onglet brusquement si c'est cancel */}
            <button className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 font-medium hover:bg-red-50 rounded-xl transition-colors">
              {t('cancel_order')}
              <div className="w-5 h-5 rounded-full border-2 border-red-400 flex items-center justify-center ml-auto">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
            </button>
            <button onClick={() => setActiveId(null)} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 font-medium hover:bg-gray-50 rounded-xl transition-colors">
              {t('invoice')}
              <svg className="ml-auto" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
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
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate('/products')}
      className={`flex items-center justify-center gap-2 px-20 py-3.5 rounded-full font-bold text-[17px] transition-all duration-300 shadow-lg shrink-0 ${hovered ? 'bg-[#0e7a6d] text-white' : 'bg-white text-[#129384]'}`}
    >
      <span>{t('btn_shop')}</span>
      <div className={`flex items-center justify-center transition-all duration-300 overflow-hidden ${hovered ? 'w-5 opacity-100' : 'w-0 opacity-0'}`}>
        <ShoppingCart size={20} strokeWidth={2} />
      </div>
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
        <div onClick={() => navigate('/add-card')} className="flex items-center gap-4 p-3 rounded-xl cursor-pointer group">
          <CreditCard size={20} className="text-[#129384]" strokeWidth={1.8} />
          <span className="text-sm font-medium text-[#555555] group-hover:text-[#129384] group-hover:font-bold transition-all">{t('payment_card')}</span>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-xl cursor-default group">
          <Bell size={20} className="text-[#129384]" strokeWidth={1.8} />
          <span className="text-sm font-medium text-[#555555] group-hover:text-[#129384] transition-colors">{t('notifications')}</span>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-xl cursor-default group">
          <ShieldCheck size={20} className="text-[#129384]" strokeWidth={1.8} />
          <span className="text-sm font-medium text-[#555555] group-hover:text-[#129384] transition-colors">{t('security_privacy')}</span>
        </div>
        <div className="flex items-center gap-4 p-3 rounded-xl cursor-default group">
          <HelpCircle size={20} className="text-[#129384]" strokeWidth={1.8} />
          <span className="text-sm font-medium text-[#555555] group-hover:text-[#129384] transition-colors">{t('help_support')}</span>
        </div>
      </div>
      <div className="border-t border-[#F0F0F0] mt-6 mb-6" />
      <button onClick={handleLogout} className="w-full py-3 bg-[#129384] text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#36B3A8] group">
        <div className="w-0 overflow-hidden group-hover:w-5 transition-all duration-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
        {t('logout')}
      </button>
    </div>
  );
};

export default Profile;